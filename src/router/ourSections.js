const express = require("express");
const router = new express.Router({
    mergeParams: true
});
module.exports = router;




router.get("/",(req,res)=>{
    // console.log(req.query);
    if(!req.query.governorate){
        res.render("our-section",{governorate:null});
    }
    else{
       let governorate = req.query.governorate;
        console.log(governorate);
        res.render("our-section",{governorate});
    }

});