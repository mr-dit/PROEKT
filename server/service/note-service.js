const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
// const mailService = require('./mail-service');
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
const NoteModel = require("../models/notes-model");

class NoteService {
  async create(user_id, project_id, title, text) {
    const note = await NoteModel.create({
      user_id: user_id,
      title: title,
      text: text,
      project_id: project_id,
    });

    return { note };
  }

  async update(_id, title, text) {
    const oldNote = await NoteModel.findOne({ _id: _id });
    if (oldNote) {
      const updateDocument = {
        $set: {
          title: title,
          text: text,
        },
      };
      return NoteModel.updateOne(oldNote, updateDocument);
    }
  }

  async delete(_id) {
    const oldNote = await NoteModel.findOne({ _id: _id });
    if (oldNote) {
      return NoteModel.deleteOne(oldNote);
    }
  }

  async getNotes(project_id) {
    const res = await NoteModel.find({ project_id: project_id });
    return res;
  }
}

module.exports = new NoteService();
