const {Schema, model} = require('mongoose');

const EducationSchema = new Schema({
	directions: {type: String},
	plans: {type: String},
	partners: {type: String},
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
})

module.exports = model('Education', EducationSchema);
