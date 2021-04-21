const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  user: { type: String, required: true },
  id: { type: String },
});

const userSchema2 = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  googleId: { type: String, required: true },
  id: { type: String },
});

var uss = mongoose.model("User", userSchema);
var uss2 = mongoose.model("User2", userSchema2);
exports.uss=uss;
exports.uss2=uss2;