const express = require("express");
const router = express.Router();

const { loginUser, createUser, getDashboardDetail } = require("../controllers");
const authMiddleware = require('../middleware/auth');

router.route("/user/login").post(loginUser);
router.route("/user/create").post(createUser);

router.route("/dashboard").post(authMiddleware, getDashboardDetail);

module.exports = router;
