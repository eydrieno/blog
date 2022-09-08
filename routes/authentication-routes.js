const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/users");

router.route("/").post(getUser);

module.exports = router;
