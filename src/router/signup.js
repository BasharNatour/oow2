const express = require("express");
const router = new express.Router();
module.exports = router;
const Country = require("../schema/country");
const Governorate = require("../schema/governorates");
const signupvalidation   =require("../middleware/validation/signup")
const User =require("../schema/user");
const verifyMailer = require("../mail/verify");



router.get("/", (req, res, next) => {
    const countries = Country.find({});
    const governorates = Governorate.find({});
    Promise.all([countries, governorates])
        .then(([countries, governorates]) => {
            res.render("singup", {
                countries,
                governorates
            });
        }).catch(next);
});

router.post("/",signupvalidation,(req,res,next)=>{
    const {
        firstName,
        lastName,
        email,
        password,
        governorate,
        type
    } = req.body;
    const user = new User({
        firstName,lastName,email,password,governorate,type
    });
    user.save().then(()=>{
        req.session.user_id = user._id;
        verifyMailer(user).catch(console.log);
        res.redirect("/verify");
    }).catch(next);
});