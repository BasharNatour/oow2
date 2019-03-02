const express = require("express");
const router = new express.Router();
module.exports = router;
const SigninValiadtion = require("../middleware/validation/signin");
const User = require("../schema/user");

router.get("/",(req,res)=>{
    res.render("login");
});

router.post("/",SigninValiadtion,(req,res,next)=>{
    const {email,password} = req.body;
    User.findOne({email}).then((doc)=>{
        req.session.user_id = doc._id;
        if(req.query.redirect){
            res.redirect(req.query.redirect);
        }
        if(doc.type === "company"){
            res.redirect("/dashboard/company_setting");
        }
        else{
            res.redirect("/dashboard");
        }
    }).catch(next);
});