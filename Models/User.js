const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
});
const UserModel = mongoose.model("managerapi", userSchema);

module.exports = UserModel;
