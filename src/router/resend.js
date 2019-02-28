const express = require("express");
const router = new express.Router();
module.exports = router;
const User =require("../schema/user");
const verifyMailer = require("../mail/verify");

router.get("/",(req,res)=>{
User.findById(req.session.user_id).then((doc)=>{
        verifyMailer(doc).catch(console.log);
        res.redirect("/verify");
    })
});