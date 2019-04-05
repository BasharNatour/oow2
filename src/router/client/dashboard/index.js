const express = require("express");
const router = new express.Router();
module.exports = router;

const activeted     = require("../../../middleware/activeted");
const authenticated = require("../../../middleware/authenticated");
const populateUser  = require("../../../middleware/populate_user");
const isUser  = require("../../../middleware/is-user");

const editSetting = require("./editSetting");





router.use("/editSetting",[authenticated,populateUser,isUser,activeted],editSetting);
