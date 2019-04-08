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
        if(doc.type === "company" && doc.companyData.plan){
               return res.redirect("/company-profile");
            }
        if(doc.type === "company" && (!doc.companyData.plan)){
           return res.redirect("/dashboard/company_setting");
        }
        if(doc.type === "client" && doc.idNationalCard){
            return res.redirect("/search");
        }
        if(doc.type === "client" && !doc.idNationalCard){
            return res.redirect("/dashboard/editSetting");
        }

    }).catch(next);
});