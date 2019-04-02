const express = require("express");
const router = new express.Router({
    mergeParams: true
});
module.exports = router;
const Category = require("../schema/category");
const User = require("../schema/user");

router.get("/", (req, res, next) => {
    let governorate = req.query.governorate;
    let section =req.query.section;
    console.log(req.query);
    Category.findById(req.query.section).then((sections) => {
        User.find({governorate,type:"company","companyData.categary":section}).then((users)=>{
            console.log(users);
            res.render("section-one", {
                sections,
                users
            });
        });
    }).catch(next);
});