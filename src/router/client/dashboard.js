const express = require("express");
const router = new express.Router();
module.exports = router;


const user_setting = require("./user_setting");




router.use("/user_setting",user_setting);