const express = require("express");
const router = express.Router();
const { addUsers, getAgeDistribution } = require("./userController");

router.route("/addusers").post(addUsers);
router.route("/agedistribution").get(getAgeDistribution);

module.exports = router;
