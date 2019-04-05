const express = require("express");
const router = new express.Router();
module.exports = router;



const dashboard = require("./dashboard");

router.use("/dashboard",dashboard);
