const express = require("express");
const router = new express.Router({
    mergeParams: true
});
module.exports = router;
const Category = require("../schema/category");
const User = require("../schema/user");
const qureryString = require("query-string");

router.get("/", (req, res, next) => {
    let governorate = req.query.governorate;
    let section =req.query.section;
    Category.findById(req.query.section).then((sections) => {
        User.paginate({governorate,type:"company","companyData.categary":section}, {page: +req.query.page || 1 , limit:7}).then((data)=>{
            res.render("section-one", {
                sections,
                users :data.docs,
                page : data.page,
                pages: data.pages,
                baseUrl:`/companies?${qureryString.stringify({ section , governorate })}`

            });
        });
    }).catch(next);
});