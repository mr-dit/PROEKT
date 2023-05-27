const { verify } = require("jsonwebtoken");
const ResourceTimeService = require("../service/resourceTime-service")

class ResourceTimeController {
	async update(req, res, next) {
		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]
			const { list, time, events } = req.body;

			const resourceTimeData = await ResourceTimeService.update(
				list,
				time,
				events,
				project_id
			)

			return res.json(resourceTimeData);
		} catch (e) {
			next(e);
		}
	}

	async getResourceTimeById(req, res, next){

		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]

			const resourceTimeData = await ResourceTimeService.getResourceTimeById(project_id)

			return res.json(resourceTimeData);
		}
		catch (e){
			next(e)
		}
	}
}

module.exports = new ResourceTimeController();
