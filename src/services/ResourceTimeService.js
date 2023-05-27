import api from "../http/index";
// import { AxiosResponse } from "axios";
// import {AuthResponse} from "../models/response/AuthResponse";

export default class ResourceTimeService {
	static async update(_id, list, time, events ) {
		return api.post(`/resourceTime/${_id}`, { list, time, events });
	}

	static async getResourceTimeById(_id){
		return api.get(`/resourceTime/${_id}`)
	}

}
