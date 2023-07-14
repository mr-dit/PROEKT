const {Schema, model} = require('mongoose');

const ResourceFinanceSchema = new Schema({
	investmentRequired: {type: String, default: ""},
	fixedCosts: {type: String, default: ""},
	variableCosts: {type: String, default: ""},
	unexpectedExpenses: {type: String, default: ""},
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
})

module.exports = model('resourceFinance', ResourceFinanceSchema);
