const express = require("express");
const router = new express.Router();
module.exports = router;


const main  = require("./main");
const subscription  = require("./subscription");
const signup  = require("./signup");
const signin = require("./signin");
const verify  = require("./verify");
const resend  = require("./resend");
const dashboard  = require("./dashboard");


router.use("/",main);
router.use("/subscribe",subscription);
router.use("/dashboard",dashboard);
router.use("/signup",signup);
router.use("/signin",signin);
router.use("/verify",verify);
router.use("/resend",resend);
