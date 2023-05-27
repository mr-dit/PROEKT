const { verify } = require("jsonwebtoken");
const AuditoryService = require("../service/auditory-service")

class AuditoryController {
	async update(req, res, next) {
		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]
			const { age, pain, description } = req.body;

			const AuditoryData = await AuditoryService.update(
				age,
				pain,
				description,
				project_id
			)

			return res.json(AuditoryData);
		} catch (e) {
			next(e);
		}
	}

	async getAuditoryById(req, res, next){

		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]

			const auditoryData = await AuditoryService.getAuditoryById(project_id)

			return res.json(auditoryData);
		}
		catch (e){
			next(e)
		}
	}
}

module.exports = new AuditoryController();
