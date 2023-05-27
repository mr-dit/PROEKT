import api from "../http/index";
// import { AxiosResponse } from "axios";
// import {AuthResponse} from "../models/response/AuthResponse";

export default class ResourceWorkService {
	static async update(_id, members, roles, functions, missingSkills) {
		return api.post(`/resourceWork/${_id}`, { members, roles, functions, missingSkills });
	}

	static async getResourceWorkById(_id){
		return api.get(`/resourceWork/${_id}`)
	}

}
