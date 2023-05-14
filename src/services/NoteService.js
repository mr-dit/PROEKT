import api from "../http/index";
// import { AxiosResponse } from "axios";
// import {AuthResponse} from "../models/response/AuthResponse";

export default class NoteService {
	static async create(_id, title, text ) {
		return api.post(`/notes/${_id}`, { title, text });
	}
	static async update(_id, title, text ) {
		return api.post(`/note`, { _id, title, text });
	}

	static async delete(_id) {
		return api.post(`/noteDelete`, { _id});
	}

	static async getNotes(_id){
		return api.get(`/notes/${_id}`)
	}

}
