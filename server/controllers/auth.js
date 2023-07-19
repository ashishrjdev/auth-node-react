const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connectDB = require("../db/connect");
const CustomAPIError = require("../errors/custom-error");
const User = require("../models/user");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  // If username or password is empty then send error message
  if (!username || !password) {
    throw new CustomAPIError("Username or Password is missing", 400);
  }

  try {
    // Get user details by username
    // If the username is not found then return error
    const user = await User.findOne({ username });
    if (!user) {
      throw new CustomAPIError("Username not found", 401);
    }
    // Validate password
    // If incorrect password then return error
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      throw new CustomAPIError("Username not found", 401);
    }

    // If sucessful username and password then
    // generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    res.status(200).json({ msg: "Login Successful", status: 200, token });
  } catch (error) {
    console.log(error);
    throw new CustomAPIError(
      "Error in logging user. Please check username and password.",
      401
    );
  }
};

const createUser = async (req, res) => {
  // Fetch the user details from request body
  let newUser = { ...req.body };
  try {
    // create a hash from user password since we will save the 
    // hash value instead of actual password text
    const hash = await bcrypt.hash(newUser.password, 10);
    newUser = { ...newUser, ...{ password: hash } };

    // Create a new user
    await User.create(newUser);
    res.status(200).json({ msg: "User created successfully", status: 200 });
  } catch (error) {
    console.log(error);
    throw new CustomAPIError("Error in creating user", 400);
  }
};

module.exports = {
  loginUser,
  createUser,
};
