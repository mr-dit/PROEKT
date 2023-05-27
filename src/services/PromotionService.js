import api from "../http/index";
// import { AxiosResponse } from "axios";
// import {AuthResponse} from "../models/response/AuthResponse";

export default class PromotionService {
	static async update(_id, promotions, content) {
		return api.post(`/promotion/${_id}`, { promotions, content });
	}

	static async getPromotionById(_id){
		return api.get(`/promotion/${_id}`)
	}

}
