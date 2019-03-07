const express = require("express");
const router = new express.Router();
module.exports = router;

const company_setting = require("./company_setting");
const plain = require("./plain");
const authenticated = require("../../middleware/authenticated");




router.use("/company_setting",authenticated,company_setting);
router.use("/plain",plain);
