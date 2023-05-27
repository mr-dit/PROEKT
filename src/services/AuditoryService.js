import api from "../http/index";
// import { AxiosResponse } from "axios";
// import {AuthResponse} from "../models/response/AuthResponse";

export default class AuditoryService {
	static async update(_id, age, pain, description) {
		return api.post(`/auditory/${_id}`, { age, pain, description });
	}

	static async getAuditoryById(_id){
		return api.get(`/auditory/${_id}`)
	}

}
