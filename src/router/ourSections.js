const express = require("express");
const router = new express.Router({
    mergeParams: true
});
module.exports = router;
const Categories = require("../schema/category");




router.get("/",(req,res)=>{
    Categories.find({}).then((category)=>{
    if(!req.query.governorate){
        res.render("our-section",{governorate:null,category});
    }
    else{
        console.log(category);
       let governorate = req.query.governorate;
        console.log(governorate);
        res.render("our-section",{governorate , category});
    }
}).catch(console.log);

});