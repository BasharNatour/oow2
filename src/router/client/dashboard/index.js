const express = require("express");
const router = new express.Router();
module.exports = router;


const editSetting = require("./editSetting");





router.use("/editSetting",editSetting);
