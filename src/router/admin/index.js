const express = require("express");
const router = new express.Router();


module.exports = router;

router.use(require("cors")());
router.use(require("./auth"));
router.use("/categories", require("./categories"));
router.use("/countries", require("./countries"));
router.use("/governorates", require("./governorates"));