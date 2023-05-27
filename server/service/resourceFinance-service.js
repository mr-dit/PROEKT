const ResourceFinance = require("../models/resourceFiance-model");

class ResourceFinanceService {
	async update(investmentRequired, fixedCosts, variableCosts, unexpectedExpenses, project_id) {
		const oldResourceFinance = await ResourceFinance.findOne({ project_id: project_id });
		if (oldResourceFinance) {
			const updateDocument = {
				$set: {
					investmentRequired: investmentRequired,
					fixedCosts: fixedCosts,
					variableCosts: variableCosts,
					unexpectedExpenses: unexpectedExpenses,
				},
			};
			return ResourceFinance.updateOne(oldResourceFinance, updateDocument);
		}
		else{
			const resourceFinance = await ResourceFinance.create({
				investmentRequired: investmentRequired,
				fixedCosts: fixedCosts,
				variableCosts: variableCosts,
				unexpectedExpenses: unexpectedExpenses,
				project_id: project_id,
			});
			return { ...resourceFinance };
		}

	}

	async getResourceFinanceById(project_id) {
		const res = await ResourceFinance.find({ project_id: project_id });
		return res;
	}
}

module.exports = new ResourceFinanceService();
