const ResourceWork = require("../models/resourceWork-model");

class ResourceWorkService {
	async update(members, roles, functions, missingSkills, project_id) {
		const oldResourceWork = await ResourceWork.findOne({ project_id: project_id });
		if (oldResourceWork) {
			const updateDocument = {
				$set: {
					members: members,
					roles: roles,
					functions: functions,
					missingSkills: missingSkills,
				},
			};
			return ResourceWork.updateOne(oldResourceWork, updateDocument);
		}
		else{
			const resourceWork = await ResourceWork.create({
				members: members,
				roles: roles,
				functions: functions,
				missingSkills: missingSkills,
				project_id: project_id,
			});
			return { ...resourceWork };
		}

	}

	async getResourceWorkById(project_id) {
		const res = await ResourceWork.find({ project_id: project_id });
		return res;
	}
}

module.exports = new ResourceWorkService();
