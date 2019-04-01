const express = require("express");
const router = new express.Router();
module.exports = router;
const populate_user = require("../../../middleware/populate_user");
const Country =require("../../../schema/country");
const Governorate= require("../../../schema/governorates");

router.get("/",populate_user,(req,res,next)=>{
    const user = req.user;
    console.log("=======================================");
    console.log("Hey Hey Hey");
    console.log("========================================");
    console.log(user);
    Country.find({}).then((countries)=>{
    Governorate.find({}).then((governorates)=>{

        res.render("edit-setting-user",{user,countries,governorates});
    }).catch(next);
    }).catch(next);
});