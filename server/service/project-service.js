const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
// const mailService = require('./mail-service');
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
const ProjectModel = require("../models/projects-model");

class ProjectService {
  async create(user_id, name, type, description) {
    const project = await ProjectModel.create({
      user_id: user_id,
      name: name,
      type: type,
      description: description,
    });

    return { ...project };
  }

  async update(_id, name, type, description, user_id) {
    const oldProject = await ProjectModel.findOne({ _id: _id });
    if (oldProject) {
      const updateDocument = {
        $set: {
          name: name,
          type: type,
          description: description,
        },
      };
      return ProjectModel.updateOne(oldProject, updateDocument);
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
