const { verify } = require("jsonwebtoken");
const ResourceFinanceService = require("../service/resourceFinance-service")

class ResourceFinanceController {
	async update(req, res, next) {
		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]
			const { investmentRequired, fixedCosts, variableCosts, unexpectedExpenses } = req.body;

			const resourceFinanceData = await ResourceFinanceService.update(
				investmentRequired,
				fixedCosts,
				variableCosts,
				unexpectedExpenses,
				project_id
			)

			return res.json(resourceFinanceData);
		} catch (e) {
			next(e);
		}
	}

	async getResourceFinanceById(req, res, next){

		try {
			const token = req.headers.authorization.split(" ")[1];
			const decoded = verify(token, process.env.JWT_ACCESS_SECRET);
			const project_id = req.params["id"]

			const resourceFinanceData = await ResourceFinanceService.getResourceFinanceById(project_id)

			return res.json(resourceFinanceData);
		}
		catch (e){
			next(e)
		}
	}
}

module.exports = new ResourceFinanceController();
