const userService = require("../service/user-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const tokenService = require("../service/token-service");
const { verify } = require("jsonwebtoken");
const noteService = require("../service/note-service");

class NoteController {
  async create(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
      const user_id = decoded.id;
      const { title, text } = req.body;
      const project_id = req.params["id"];

      const noteData = await noteService.create(
        user_id,
        project_id,
        title,
        text
      );

      return res.json(noteData);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, process.env.JWT_ACCESS_SECRET);

      const { _id, title, text } = req.body;

      const noteData = await noteService.update(_id, title, text);

      return res.json(noteData);
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
      const { _id } = req.body;

      const noteData = await noteService.delete(_id);

      return res.json(noteData);
    } catch (e) {
      next(e);
    }
  }

  async getNotes(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
      const user_id = decoded.id;
      const project_id = req.params["id"];

      const noteData = await noteService.getNotes(project_id);

      return res.json(noteData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new NoteController();
