const express = require("express");
const router = new express.Router();
module.exports = router;
const User =require("../../../schema/user");
const populate_user = require("../../../middleware/populate_user");

router.get("/",populate_user,(req,res)=>{
    res.render("service_table",{user:req.user , readOnly:false});
    console.log(req.user);

});

router.post("/",populate_user,(req,res)=>{
    req.user.companyData.services = req.body.services;
    req.user.save().then(()=>{
        res.redirect("/dashboard/service");
    }).catch((console.log));
});