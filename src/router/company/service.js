const express = require("express");
const router = new express.Router();
module.exports = router;
const User =require("../../schema/user");
const populate_user = require("../../middleware/populate_user");

router.get("/",(req,res)=>{
    res.render("service_table");

});

router.post("/",populate_user,(req,res)=>{
    req.user.companyData.services = req.body.services;
    req.user.save().then(()=>{
        res.redirect("/dashboard/plan");
    }).catch((console.log));
});