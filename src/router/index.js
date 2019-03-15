const express = require("express");
const router = new express.Router();
module.exports = router;



const main  = require("./main");
const subscription  = require("./subscription");
const signup  = require("./signup");
const signin = require("./signin");
const verify  = require("./verify");
const resend  = require("./resend");
const authenticated =require("../middleware/authenticated");
const guest=require("../middleware/guest");
const company =require("./company");
const client =require("./client");

const search =require("./search");




router.use("/",main);
router.use("/subscribe",subscription);

router.use("/signup",guest,signup);
router.use("/signin",guest,signin);
router.use("/verify",authenticated,verify);
router.use("/resend",authenticated,resend);
router.use("/search",search);
router.use(company);
router.use(client);



