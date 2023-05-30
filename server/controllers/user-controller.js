const userService = require('../service/user-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');
const { verify } = require('jsonwebtoken')
const projectService = require('../service/project-service')

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            return res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async setAvatar(req, res, next) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
            const user_id = decoded.id;

            const file = req.file
            if (user_id){
                const userData = await userService.setAvatar(
                  file,
                  user_id
                )
                return res.json(userData);
            }



        } catch (e) {
            next(e);
        }
    }
    async getAvatar(req, res, next) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
            const user_id = decoded.id;

            if (user_id){
                const userData = await userService.getAvatar(user_id                )
                return res.json(userData);
            }
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new UserController();
