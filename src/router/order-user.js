const express = require("express");
const router = new express.Router();
module.exports = router;
const Contract = require("../schema/contract"); 
const User = require("../schema/user"); 

router.get("/",(req,res, next)=>{
    Contract.find({user:req.user._id}).populate("company").then((contracts)=>{
        res.render("order-users",{
            contracts,
            loggedin:req.user
        });
        
    }).catch(next);
});