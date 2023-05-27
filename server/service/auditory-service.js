const AuditoryModel = require("../models/auditory-model");

class AuditoryService {
	async update(age, pain, description, project_id) {
		const oldAuditory = await AuditoryModel.findOne({ project_id: project_id });
		if (oldAuditory) {
			const updateDocument = {
				$set: {
					age: age,
					pain: pain,
					description: description,
				},
			};
			return AuditoryModel.updateOne(oldAuditory, updateDocument);
		}
		else{
			const auditory = await AuditoryModel.create({
				age: age,
				pain: pain,
				description: description,
				project_id: project_id,
			});
			return { ...auditory };
		}

	}

	async getAuditoryById(project_id) {
		const res = await AuditoryModel.find({ project_id: project_id });
		return res;
	}
}

module.exports = new AuditoryService();
