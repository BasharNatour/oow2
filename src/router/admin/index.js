const express = require("express");
const router = new express.Router();

const isLoggedIn = require("./middleware/is-logged-in");

module.exports = router;

router.use(require("cors")());
router.use(require("./auth"));
router.use("/categories", isLoggedIn, require("./categories"));
router.use("/countries", isLoggedIn, require("./countries"));
router.use("/governorates", isLoggedIn, require("./governorates"));
router.use("/complaints", isLoggedIn, require("./complaints"));
router.use("/users", isLoggedIn, require("./users"));