const Promotion = require("../models/promotion-model");

class PromotionService {
	async update(promotions, content, project_id) {
		const oldPromotion = await Promotion.findOne({ project_id: project_id });
		if (oldPromotion) {
			const updateDocument = {
				$set: {
					promotions: promotions,
					content: content,
				},
			};
			return Promotion.updateOne(oldPromotion, updateDocument);
		}
		else{
			const promotion = await Promotion.create({
				promotions: promotions,
				content: content,
				project_id: project_id,
			});
			return { ...promotion };
		}

	}

	async getPromotionById(project_id) {
		const res = await Promotion.find({ project_id: project_id });
		return res;
	}
}

module.exports = new PromotionService()
