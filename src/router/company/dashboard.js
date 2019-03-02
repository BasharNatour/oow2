const express = require("express");
const router = new express.Router();
module.exports = router;

const company_setting = require("./company_setting");
const plain = require("./plain");



router.use("/company_setting",company_setting);
router.use("/plain",plain);
