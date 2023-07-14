const {Schema, model} = require('mongoose');

const ProjectSchema = new Schema({
	name: {type: String, default: ""},
	iconPath: {type: String, default: ""},
	coverPath: {type: String, default: ""},
	type: {type: String, default: ""},
	description: {type: String, default: ""},
	user_id: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = model('Project', ProjectSchema);
