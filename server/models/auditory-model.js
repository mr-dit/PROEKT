const { Schema, model } = require("mongoose");

const AuditorySchema = new Schema({
  age: { type: String, default: "" },
  pain: { type: String, default: "" },
  description: { type: String, default: "" },
  project_id: { type: Schema.Types.ObjectId, ref: "Project" },
});

module.exports = model("Auditory", AuditorySchema);
