const express =require("express");
const router = new express.Router({
    mergeParams: true
});
module.exports = router;

router.get("/",(req,res)=>{
    governarate = req.params;
    console.log(governarate);
    res.render("photography");
});

