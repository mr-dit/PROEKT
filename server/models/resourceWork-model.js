const {Schema, model} = require('mongoose');

const ResourceWorkSchema = new Schema({
	members: {type: String, default: ""},
	roles: {type: String, default: ""},
	functions: {type: String, default: ""},
	missingSkills: {type: String, default: ""},
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
})

module.exports = model('resourceWork', ResourceWorkSchema);
