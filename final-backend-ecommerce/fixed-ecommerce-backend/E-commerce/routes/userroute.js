// backend/routes/userRoutes.js
const express = require("express");
const { authenticate, authorizeAdmin } = require("../middleware/auth");
const { getUsers } = require("../controllers/usercontroller");

const router = express.Router();

router.get("/", authenticate, authorizeAdmin, getUsers);

module.exports = router;