import api from "../http/index";


export default class EducationService {
	static async update(_id, directions, plans, partners ) {
		return api.post(`/educations/${_id}`, { directions, plans, partners });
	}

	static async getEducationById(_id){
		return api.get(`/educations/${_id}`)
	}

}
