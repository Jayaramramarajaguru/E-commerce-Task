<<<<<<< HEAD
// backend/routes/authRoutes.js
const express = require("express");
const { register, login } = require("../controllers/authcontroller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

=======
// backend/routes/authRoutes.js
const express = require("express");
const { register, login } = require("../controllers/authcontroller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

>>>>>>> 4826aa4af46ba12daac8fab1faa11bf160fcfe2c
module.exports = router;