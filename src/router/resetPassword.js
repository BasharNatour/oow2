const express = require("express");
const router = new express.Router();
module.exports = router;
const forgetPassword = require("../schema/forgetPassword");
const User = require("../schema/user");
const bcrypt = require("bcrypt");
const comparePassword = require("../middleware/validation/update-password");


router.get("/:token",(req,res,next)=>{
    
    forgetPassword.findOne({token:req.params.token}).populate("user").then((doc)=>{
        if(doc){
            res.render("resetPassword",{token:req.params.token});
        }
        else{
            res.redirect("/forget");
        }
    }).catch(next);
});

router.post("/:token",comparePassword,(req,res,next)=>{
    const{newPassword , conPassword} = req.body;
    forgetPassword.findOne({token:req.params.token}).populate("user").then((doc)=>{
            bcrypt.hash(newPassword, 10).then((hash) => {
                doc.user.password = hash;
                doc.user.save().then(()=>{

                    res.redirect("/signin");
                }).catch(next);
            
        }).catch(next);
    }).catch(next);
        
});