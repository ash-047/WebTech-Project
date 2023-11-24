let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: { type: String, required: true },
  USN: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Book", userSchema);