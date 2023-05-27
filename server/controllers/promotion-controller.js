const { verify } = require("jsonwebtoken");
const PromotionService = require("../service/promotion-service")

class PromotionController {
	async update(req, res, next) {
		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]
			const { promotions, content } = req.body;

			const promotionData = await PromotionService.update(
				promotions,
				content,
				project_id
			)

			return res.json(promotionData);
		} catch (e) {
			next(e);
		}
	}

	async getPromotionById(req, res, next){

		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]

			const promotionData = await PromotionService.getPromotionById(project_id)

			return res.json(promotionData);
		}
		catch (e){
			next(e)
		}
	}
}

module.exports = new PromotionController()
