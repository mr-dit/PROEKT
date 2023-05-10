const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const projectController = require('../controllers/project-controller')
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
// router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);

router.post('/project', projectController.create)
router.post('/project/:id', projectController.update)
router.get('/project/:id', projectController.getProjectById)
router.get('/project', projectController.getProjects)

router.get('/users', authMiddleware, userController.getUsers);

module.exports = router
