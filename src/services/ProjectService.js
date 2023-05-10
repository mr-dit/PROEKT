import api from "../http/index";
// import { AxiosResponse } from "axios";
// import {AuthResponse} from "../models/response/AuthResponse";

export default class ProjectService {
	static async create(name, type, description) {
		return api.post("/project", { name, type, description });
	}
	static async update(_id, name, type, description) {
		return api.post(`/project/${_id}`, { name, type, description });
	}

	static async getProjects(){
		return api.get('/project')
	}

	static async getProjectById(_id){
		return api.get(`/project/${_id}`)
	}

}
