const ResourceTime = require("../models/resourceTime-model");

class ResourceTimeService {
	async update(list, time, events, project_id) {
		const oldResourceTime = await ResourceTime.findOne({ project_id: project_id });
		if (oldResourceTime) {
			const updateDocument = {
				$set: {
					list: list,
					time: time,
					events: events,
				},
			};
			return ResourceTime.updateOne(oldResourceTime, updateDocument);
		}
		else{
			const resourceTime = await ResourceTime.create({
				list: list,
				time: time,
				events: events,
				project_id: project_id,
			});
			return { ...resourceTime };
		}

	}

	async getResourceTimeById(project_id) {
		const res = await ResourceTime.find({ project_id: project_id });
		return res;
	}
}

module.exports = new ResourceTimeService();
