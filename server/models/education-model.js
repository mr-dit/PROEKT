const {Schema, model} = require('mongoose');

const EducationSchema = new Schema({
	directions: {type: String, default: ""},
	plans: {type: String, default: ""},
	partners: {type: String}, default: "",
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
})

module.exports = model('Education', EducationSchema);
