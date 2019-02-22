const express = require("express");
const router = new express.Router();
module.exports = router;
const SigninValiadtion = require("../middleware/validation/signin");
const User = require("../schema/user");

router.get("/",(req,res)=>{
    res.render("login");
});

router.post("/",SigninValiadtion,(req,res)=>{
    const {email,password} = req.body;
    User.findOne({email}).then((doc)=>{
        // req.session.user_id = user._id;
        if(doc.type ===  "work"){
            res.redirect("/yourProfile");
        }
        else{
            res.redirect("/dashboard");
        }
    });
});