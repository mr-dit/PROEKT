const userService = require("../service/user-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const tokenService = require("../service/token-service");
const { verify } = require("jsonwebtoken");
const projectService = require("../service/project-service");

class ProjectController {
  async create(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
      const user_id = decoded.id
      const { name, type, description} = req.body;
      const file = req.files
      const iconPath = file[0].originalname + "-" + new Date().toDateString()

      const userData
        = await projectService.create(
        user_id,
        name,
        iconPath,
        type,
        description
      )

      // return res.json();
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async update(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
      const user_id = decoded.id;
      const _id = req.params["id"]

      const { name, type, description } = req.body;

      const userData = await projectService.update(
        _id,
        name,
        type,
        description,
				user_id
      )

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getProjects(req, res, next){
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
      const user_id = decoded.id;


      const projectData = await projectService.getProjects(user_id)

      return res.json(projectData);
    }
    catch (e){
      next(e)
    }
  }

  async getProjectById(req, res, next){

    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
      const _id = req.params["id"]


      const projectData = await projectService.getProjectById(_id)

      return res.json(projectData);
    }
    catch (e){
      next(e)
    }
  }
}

module.exports = new ProjectController();
