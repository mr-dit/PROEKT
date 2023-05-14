const {Schema, model} = require('mongoose');

const NotesSchema = new Schema({
	title: {type: String},
	text: {type: String},
	project_id: {type: Schema.Types.ObjectId, ref: 'Project'},
	user_id: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = model('Notes', NotesSchema);
