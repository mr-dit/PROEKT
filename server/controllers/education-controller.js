const { verify } = require("jsonwebtoken");
const EducationService = require("../service/education-service")

class EducationController {
	async update(req, res, next) {
		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]
			const { directions, plans, partners } = req.body;

			const educationData = await EducationService.update(
				directions,
				plans,
				partners,
				project_id
			)

			return res.json(educationData);
		} catch (e) {
			next(e);
		}
	}

	async getEducationById(req, res, next){

		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]

			const educationData = await EducationService.getEducationById(project_id)

			return res.json(educationData);
		}
		catch (e){
			next(e)
		}
	}
}

module.exports = new EducationController();
