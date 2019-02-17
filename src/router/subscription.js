const express = require("express");
const router  = new express();
module.exports = router;
const subscription = require("../middleware/validation/subscription");

router.post("/",subscription,(req,res)=>{
       return res.redirect("/");

});