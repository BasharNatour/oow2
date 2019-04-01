const express = require("express");
const router = new express.Router();
module.exports = router;

const company_setting = require("./company_setting");
const plan = require("./plan");
const service = require("./service");



const authenticated = require("../../../middleware/authenticated");




router.use("/company_setting",authenticated,company_setting);
router.use("/plan",plan);
router.use("/service",service);
