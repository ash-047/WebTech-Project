let mongoose = require("mongoose");
let Schema = mongoose.Schema;
const ObjectId = require("mongoose").Types.ObjectId;

let userSchema = new Schema({
  USN: String,
  by: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Reserved", userSchema);
