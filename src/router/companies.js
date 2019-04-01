const express =require("express");
const router = new express.Router({
    mergeParams: true
});
module.exports = router;

router.get("/",(req,res)=>{
    governarate = req.query;
    console.log(governarate);
    res.render("photography");
});

