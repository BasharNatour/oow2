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
const logout =require("./logout");
const removeAccount =require("./removeAccount");
const complaints =require("./complaint");
const ourSections = require("./ourSections");
const companies = require("./companies");


const search =require("./search");




router.use("/",main);
router.use("/subscribe",subscription);

router.use("/signup",guest,signup);
router.use("/signin",guest,signin);
router.use("/verify",authenticated,verify);
router.use("/resend",authenticated,resend);
router.use("/search",search);
router.use("/logout",logout);
router.use("/remove-account",removeAccount);
router.use("/complaints",complaints);
router.use("/oursections",ourSections);
router.use(company);
router.use(client);
router.use("/companies",companies);




