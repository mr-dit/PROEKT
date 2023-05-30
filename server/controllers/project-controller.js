const userService = require("../service/user-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const tokenService = require("../service/token-service");
const { verify } = require("jsonwebtoken");
const projectService = require("../service/project-service");
const fs = require("fs");
const path = require("path");

class ProjectController {
  async create(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
      const user_id = decoded.id
      const { name, type, description} = req.body;
      const iconPath =  req.files['file'][0].filename
      const coverPath = req.files['cover'][0].filename

      const userData
        = await projectService.create(
        user_id,
        name,
        iconPath,
        coverPath,
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

      const { name, type, description} = req.body;
      const files = req.files

      // const iconPath =  req.files['file'][0].filename
      // const coverPath = req.files['cover'][0].filename


      const userData = await projectService.update(
        _id,
        name,
        type,
        description,
				files
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
      // const token = req.headers.authorization.split(" ")[1];
      // const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
      const _id = req.params["id"]
      //
      //
      const projectData = await projectService.getProjectById(_id)
      //
      // console.log(projectData[0].iconPath)
      // res.setHeader("Content-Type", "image/jpeg");
      // // const imageStream = fs.createReadStream(projectData[0].iconPath);
      //
      // res.sendFile(projectData[0].iconPath)
      // // imageStream.pipe(res);
      //
      // // return imageStream.pipe(res.json(projectData));
      //
      // return res.json(projectData);


      // const filename = 'example.jpg'; // Имя файла, который вы хотите вернуть
      const filePath = `${projectData[0].iconPath}`; // Путь к файлу изображения, включая имя файла
      const coverPath = `${projectData[0].coverPath}`;

      // Загрузка других данных, которые вы хотите вернуть
      const otherData = {
        _id: projectData[0]._id,
        name: projectData[0].name,
        type: projectData[0].type,
        description: projectData[0].description
      };

      // Отправка файла и других данных в ответе
       return res.json({
        file: {
          filePath,
          coverPath
        },
        data: otherData,
      });


    }
    catch (e){
      next(e)
    }
  }
}

module.exports = new ProjectController();
