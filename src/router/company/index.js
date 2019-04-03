const express = require("express");
const router = new express.Router();
module.exports = router;
const activeted     = require("../../middleware/activeted");
const authenticated = require("../../middleware/authenticated");
const populateUser  = require("../../middleware/populate_user");

const dashboard = require("./dashboard");

router.use("/dashboard",[authenticated,populateUser,activeted],dashboard);