import api from "../http/index";
// import { AxiosResponse } from "axios";
// import {AuthResponse} from "../models/response/AuthResponse";

export default class ResourceFinanceService {
	static async update(_id, investmentRequired, fixedCosts, variableCosts, unexpectedExpenses) {
		return api.post(`/resourceFinance/${_id}`, { investmentRequired, fixedCosts, variableCosts, unexpectedExpenses });
	}

	static async getResourceFinanceById(_id){
		return api.get(`/resourceFinance/${_id}`)
	}

}
