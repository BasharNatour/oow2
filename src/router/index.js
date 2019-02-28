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
const authenticated =require("../middleware/authenticated");
const guest=require("../middleware/guest");


router.use("/",main);
router.use("/subscribe",subscription);

router.use("/signup",guest,signup);
router.use("/signin",guest,signin);
router.use("/verify",authenticated,verify);
router.use("/resend",authenticated,resend);

router.use("/dashboard",authenticated,dashboard);

