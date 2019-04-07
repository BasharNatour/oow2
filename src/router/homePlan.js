const express = require("express");
const router = new express.Router();
module.exports = router;

router.get("/plan1",(req,res)=>{
    res.render("plan1");
});
router.get("/plan2",(req,res)=>{
    res.render("plan2");
});