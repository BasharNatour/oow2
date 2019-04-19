const express = require("express");
const router = new express.Router();
module.exports = router;
const User = require("../schema/user");
const resetPassword = require("../mail/resetPassword");



router.get("/",(req,res)=>{
    res.render("forget");
});

router.post("/",(req,res)=>{
    const email =  req.body.email;
    User.findOne({email}).then((doc)=>{
        if(doc){
            resetPassword(doc).catch(console.log);
            req.flash("success",{message:"Check your email for update your password"})
            res.redirect("/forget");
        }
        else{
            req.flash("error",{message:"This email does not exist"})
            res.render("forget");
        }
    })

});