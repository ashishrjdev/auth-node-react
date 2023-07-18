const loginUser = async (req, res) => {
  res.status(200).json({ msg: "Login User" });
};

const createUser = async (req, res) => {
  res.status(200).json({ msg: "Create User" });
};

module.exports = {
  loginUser,
  createUser,
};
