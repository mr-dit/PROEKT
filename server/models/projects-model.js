const {Schema, model} = require('mongoose');

const ProjectSchema = new Schema({
	name: {type: String},
	iconPath: {type: String},
	type: {type: String},
	description: {type: String},
	user_id: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = model('Project', ProjectSchema);
