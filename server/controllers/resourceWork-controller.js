const { verify } = require("jsonwebtoken");
const ResourceWorkService = require("../service/resourceWork-service")

class ResourceWorkController {
	async update(req, res, next) {
		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]
			const { members, roles, functions, missingSkills } = req.body;

			const resourceWorkData = await ResourceWorkService.update(
				members,
				roles,
				functions,
				missingSkills,
				project_id
			)

			return res.json(resourceWorkData);
		} catch (e) {
			next(e);
		}
	}

	async getResourceWorkById(req, res, next){

		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]

			const resourceWorkData = await ResourceWorkService.getResourceWorkById(project_id)

			return res.json(resourceWorkData);
		}
		catch (e){
			next(e)
		}
	}
}

module.exports = new ResourceWorkController();
