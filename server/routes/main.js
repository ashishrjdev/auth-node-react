const express = require("express");
const router = express.Router();

const { loginUser, createUser, getDashboardDetail } = require("../controllers");

router.route("/user/login").post(loginUser);
router.route("/user/create").post(createUser);

router.route("/dashboard").post(getDashboardDetail);

module.exports = router;
