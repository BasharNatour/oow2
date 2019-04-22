const express = require("express");
const router = new express.Router();
module.exports = router;
const Contract = require("../schema/contract"); 

router.get("/",(req,res)=>{
    Contract.find({company:req.user._id}).populate("user").then((contracts)=>{
        res.render("order-worker",{
            contracts,
            loggedin:req.user
        });
        
    });
});