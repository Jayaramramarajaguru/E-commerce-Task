<<<<<<< HEAD
// backend/controllers/userController.js
const User = require("../models/user");

const getUsers = async (req, res) => {
  const users = await User.find({}, { password: 0 });
  res.json(users);
};

=======
// backend/controllers/userController.js
const User = require("../models/user");

const getUsers = async (req, res) => {
  const users = await User.find({}, { password: 0 });
  res.json(users);
};

>>>>>>> 4826aa4af46ba12daac8fab1faa11bf160fcfe2c
module.exports = { getUsers };