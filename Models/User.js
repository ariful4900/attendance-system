const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 30,
    minlength: 3,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  roles: {
    type: [String],
    enum: ["STUDENT", "ADMIN"],
    required: true,
    default: ["STUDENT"],
  },
  accountStatus: {
    type: String,
    enum: ["PENDING", "ACTIVE", "REJECT"],
    required: true,
    default: "PENDING",
  },
});

const User = model("User", userSchema);

module.exports = User;
