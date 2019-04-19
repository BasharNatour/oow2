const express = require("express");
const router = new express.Router();
module.exports = router;
const Governorates = require("../schema/governorates");
const Countries =require("../schema/country");


router.get("/",(req,res)=>{
    Governorates.find({}).populate("country").then((governorates)=>{
        const result = governorates.filter(governorates => governorates.country.name === "Egypt" );
        // console.log(result);
        res.render("search",{
            loggedin : req.user,
            result,
            user:req.user
        });
    }).catch(console.log);
});
