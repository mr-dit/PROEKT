const {Schema, model} = require('mongoose');

const ResourceFinanceSchema = new Schema({
	investmentRequired: {type: String},
	fixedCosts: {type: String},
	variableCosts: {type: String},
	unexpectedExpenses: {type: String},
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
})

module.exports = model('resourceFinance', ResourceFinanceSchema);
