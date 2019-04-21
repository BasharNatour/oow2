const express = require("express");
const router = new express.Router();
module.exports = router;
const User = require("../schema/user");

router.get("/:id",(req,res)=>{
    User.findById(req.params.id).then((company)=>{
         res.render("service_table",{
             user:company,
             loggedin:req.user,
             readOnly:true
         });  
    })  
 });