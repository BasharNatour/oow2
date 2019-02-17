const express = require("express");
const router = new express();
module.exports = router;

router.get("/",(req,res)=>{
    res.render("index.pug");
});