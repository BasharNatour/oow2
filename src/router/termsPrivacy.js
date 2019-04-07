const express =require("express");
const router = new express.Router();
module.exports = router;


router.get("/", (req, res, next) => {
    res.render("terms-privacy");
});