const express = require("express");
const router = new express.Router();
module.exports = router;

const company_setting = require("./company_setting");
const plan = require("./plan");
const service = require("./service");
const activeted     = require("../../../middleware/activeted");
const authenticated = require("../../../middleware/authenticated");
const populateUser  = require("../../../middleware/populate_user");
const isCompany = require("../../../middleware/is-company");






router.use("/company_setting",[authenticated,populateUser,isCompany,activeted],company_setting);
router.use("/plan",[authenticated,populateUser,isCompany,activeted],plan);
router.use("/service",[authenticated,populateUser,isCompany,activeted],service);
