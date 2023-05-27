import api from "../http/index";
// import { AxiosResponse } from "axios";

export default class ProjectService {
	static async create(name, type, description, icon) {
		let data = new FormData();

		// data.append('file', icon)
		data.append('name', name)
		data.append('type', type)
		data.append('description', description)

		return api.post(
      "/project",
			data,
      {
        headers: {
					'Content-Type': `multipart/form-data`
				},
      }
    );
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
