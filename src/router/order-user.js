const express = require("express");
const router = new express.Router();
module.exports = router;
const Contract = require("../schema/contract"); 
const User = require("../schema/user"); 

router.get("/",(req,res)=>{
    Contract.find({user:req.user._id}).populate("company").then((contracts)=>{
        console.log(contracts);
        res.render("order-users",{
            contracts
        });
        
    });
});