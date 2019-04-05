const express = require("express");
const router = new express.Router();
module.exports = router;



const main          = require("./main");
const subscription  = require("./subscription");
const signup        = require("./signup");
const signin        = require("./signin");
const verify        = require("./verify");
const resend        = require("./resend");
const updatePassword = require("./update-password");

const company       = require("./company");
const client        = require("./client");
const logout        = require("./logout");
const removeAccount = require("./removeAccount");
const complaints    = require("./complaint");
const ourSections   = require("./ourSections");
const companies     = require("./companies");

const activeted     = require("../middleware/activeted");
const guest         = require("../middleware/guest");
const authenticated = require("../middleware/authenticated");
const populateUser  = require("../middleware/populate_user");
const isUser        = require("../middleware/is-user");
const isCompany     = require("../middleware/is-company");


const search =require("./search");




router.use("/",main);
router.use("/subscribe",subscription);

router.use("/signup",guest,signup);
router.use("/signin",guest,signin);
router.use("/verify",authenticated,verify);
router.use("/resend",authenticated,resend);
router.use("/search",[authenticated,populateUser,isUser,activeted],search);
router.use("/logout",logout);
router.use("/remove-account",[authenticated,populateUser,activeted],removeAccount);
router.use("/complaints",[authenticated,populateUser,activeted],complaints);
router.use("/oursections",[authenticated,populateUser,isUser,activeted],ourSections);
router.use(company);
router.use(client);
router.use("/companies",[authenticated,populateUser,isUser,activeted],companies);
router.use("/update",[authenticated,populateUser,activeted],updatePassword);




