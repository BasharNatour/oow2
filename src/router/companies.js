const express =require("express");
const router = new express.Router({
    mergeParams: true
});
module.exports = router;
const Category = require("../schema/category");

router.get("/",(req,res,next)=>{
     let governarate = req.query.governarate;
     console.log(req.query.section);
    Category.findById(req.query.section).then((sections)=>{
        console.log(sections);

        res.render("section-one",{sections});
    }).catch(next);
});

