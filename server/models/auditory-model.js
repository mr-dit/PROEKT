const {Schema, model} = require('mongoose');

const AuditorySchema = new Schema({
	age: {type: String},
	pain: {type: String},
	description: {type: String},
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
})

module.exports = model('Auditory', AuditorySchema);
