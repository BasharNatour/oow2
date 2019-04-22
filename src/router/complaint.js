const express = require("express");
const router = new express.Router();
module.exports = router;
const Complaint =require("../schema/complaint");

router.get("/",(req,res)=>{
    res.render("complaints",{user:req.user , loggedin:req.user});
});

router.post("/",(req,res)=>{
    const {name,email,title} = req.body;
    const com = new Complaint({
        user:req.user._id,
        name,email,title
    });
    com.save().then(()=>{
        req.flash("success", {message : "We will to reply you as soon as possible "});
        res.redirect("/Complaints");
    });
});