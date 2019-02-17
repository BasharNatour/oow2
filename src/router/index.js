const express = require("express");
const router = new express.Router();
module.exports = router;


const main  = require("./main");
const subscription  = require("./subscription");
const signup  = require("./signup");


router.use("/",main);
router.use("/subscribe",subscription);
router.use("/signup",signup);
