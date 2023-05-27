const {Schema, model} = require('mongoose');

const ResourceWorkSchema = new Schema({
	members: {type: String},
	roles: {type: String},
	functions: {type: String},
	missingSkills: {type: String},
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
})

module.exports = model('resourceWork', ResourceWorkSchema);
