const {Schema, model} = require('mongoose');

const ResourceTimeSchema = new Schema({
	list: {type: String, default: ""},
	time: {type: String, default: ""},
	events: {type: String, default: ""},
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
})

module.exports = model('resourceTime', ResourceTimeSchema);
