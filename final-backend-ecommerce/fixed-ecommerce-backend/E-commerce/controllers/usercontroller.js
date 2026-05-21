// backend/controllers/userController.js
const User = require("../models/user");

const getUsers = async (req, res) => {
  const users = await User.find({}, { password: 0 });
  res.json(users);
};

module.exports = { getUsers };