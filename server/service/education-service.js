const Education = require("../models/education-model");

class EducationService {
	async update(directions, plans, partners, project_id) {
		const oldResourceTime = await Education.findOne({ project_id: project_id });
		if (oldResourceTime) {
			const updateDocument = {
				$set: {
					directions: directions,
					plans: plans,
					partners: partners,
				},
			};
			return Education.updateOne(oldResourceTime, updateDocument);
		}
		else{
			const resourceTime = await Education.create({
				directions: directions,
				plans: plans,
				partners: partners,
				project_id: project_id,
			});
			return { ...resourceTime };
		}

	}

	async getEducationById(project_id) {
		const res = await Education.find({ project_id: project_id });
		return res;
	}
}

module.exports = new EducationService();
