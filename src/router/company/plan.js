const express = require("express");
const router = new express.Router();
module.exports = router;
const Plain = require("../../schema/plan");

router.get("/",(req,res,next)=>{
    Plain.find({}).then((docs)=>{
        // console.log(docs);
        // console.log(docs[0]._id);
        res.render("plan",{docs});
    })
});

router.post("/",(req,res,next)=>{
    
    console.log(req.body);
});