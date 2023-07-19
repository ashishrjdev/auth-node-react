const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastname: {
    type: String,
    required: [true, "Last Name is required"],
  },
  username: {
    type: String,
    required: [true, "User Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  dob: {
    type: String,
  },
  gender: {
    type: String,
    enum: {
      values: ["Male", "Female"],
      message: "{VALUE} is not supported",
    },
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', userSchema);
