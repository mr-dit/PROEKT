const {Schema, model} = require('mongoose');

const PromotionSchema = new Schema({
	promotions: {type: String},
	content: {type: String},
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
})

module.exports = model('Promotion', PromotionSchema);
