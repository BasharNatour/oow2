const express = require("express");
const router = new express.Router();
module.exports = router;
const User = require("../schema/user");
const Contract = require("../schema/contract"); 
let companyId;

router.get("/:id",(req,res)=>{
    companyId = req.params.id;
    User.findById(req.params.id).then((company)=>{
        res.render("contract",{
            company,
            user: req.user,
            readOnly:false,

        });  
   });
});

router.post("/",(req,res,next)=>{
   let contract = new Contract({
    company: companyId,
    user: req.user._id,
    date: new Date(req.body.date + " " + req.body.time),
    services:req.body.services,
    notes:req.body.notes
   });
   contract.save().then(()=>{
    res.redirect("/order-User");
   }).catch(next);
    
});