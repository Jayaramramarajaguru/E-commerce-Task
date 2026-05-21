<<<<<<< HEAD
// backend/routes/userRoutes.js
const express = require("express");
const { authenticate, authorizeAdmin } = require("../middleware/auth");
const { getUsers } = require("../controllers/usercontroller");

const router = express.Router();

router.get("/", authenticate, authorizeAdmin, getUsers);

=======
// backend/routes/userRoutes.js
const express = require("express");
const { authenticate, authorizeAdmin } = require("../middleware/auth");
const { getUsers } = require("../controllers/usercontroller");

const router = express.Router();

router.get("/", authenticate, authorizeAdmin, getUsers);

>>>>>>> 4826aa4af46ba12daac8fab1faa11bf160fcfe2c
module.exports = router;