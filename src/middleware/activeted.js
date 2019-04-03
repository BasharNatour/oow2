const express = require("express");
const router  = new express.Router();
module.exports = router;
const User = require("../schema/user");


module.exports = function activeted (req,res,next){
    if (req.user.activated) next();
    else res.redirect("/verify");
}