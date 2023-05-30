const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
// const mailService = require('./mail-service');
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
const ProjectModel = require("../models/projects-model");

class ProjectService {
  async create(user_id, name, iconPath, coverPath, type, description) {
    const project = await ProjectModel.create({
      user_id: user_id,
    });

    return { ...project };
  }

  async update(_id, name, type, description, files) {
    const oldProject = await ProjectModel.findOne({ _id: _id });
    if (oldProject) {
      if (Object.keys(files).length === 2){
        const iconPath =  files['file'][0].filename
        const coverPath = files['cover'][0].filename
        const updateDocument = {
          $set: {
            name: name,
            iconPath: iconPath,
            coverPath: coverPath,
            type: type,
            description: description,
          },
        };
        return ProjectModel.updateOne(oldProject, updateDocument);
      }
      else if (files['file']) {
        const iconPath =  files['file'][0].filename
        const updateDocument = {
          $set: {
            name: name,
            iconPath: iconPath,
            coverPath: oldProject.coverPath,
            type: type,
            description: description,
          },
        };
        return ProjectModel.updateOne(oldProject, updateDocument);
      }
      else if (files['cover']) {
        const coverPath = files['cover'][0].filename
        const updateDocument = {
          $set: {
            name: name,
            iconPath: oldProject.iconPath,
            coverPath: coverPath,
            type: type,
            description: description,
          },
        };
        return ProjectModel.updateOne(oldProject, updateDocument);
      } else {
        const updateDocument = {
          $set: {
            name: name,
            iconPath: oldProject.iconPath,
            coverPath: oldProject.coverPath,
            type: type,
            description: description,
          },
        };
        return ProjectModel.updateOne(oldProject, updateDocument);
      }
    }
  }

  async getProjectById(_id) {
    const res = await ProjectModel.find({ _id: _id });
    return res;
  }

  async getProjects(user_id) {
    const res = await ProjectModel.find({ user_id: user_id });
    return res;
  }
}

module.exports = new ProjectService();
