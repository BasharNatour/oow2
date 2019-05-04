const express = require("express");
const router = new express.Router();
module.exports = router;


router.get("/:id",(req,res)=>{
    res.render("message",{contract:req.params.id});
});

