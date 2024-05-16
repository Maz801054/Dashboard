const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  projectName: String,
  customer: String,
  data: String,
  amount: String,
  status: String,
});

const UserModel = mongoose.model("item", UserSchema);
module.exports = UserModel;
