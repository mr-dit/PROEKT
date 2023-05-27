const {Schema, model} = require('mongoose');

const ResourceTimeSchema = new Schema({
	list: {type: String},
	time: {type: String},
	events: {type: String},
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
})

module.exports = model('resourceTime', ResourceTimeSchema);
