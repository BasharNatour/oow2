const express = require("express");
const router = new express();
module.exports = router;
const Country = require("../schema/country");
const Governorate = require("../schema/governorates");
const Signup   =require("../middleware/validation/signup")

router.get("/", (req, res, next) => {
    const countries = Country.find({});
    const governorates = Governorate.find({});
    Promise.all([countries, governorates])
        .then(([countries, governorates]) => {
            res.render("singup.pug", {
                countries,
                governorates
            });
        }).catch(next);
});

router.post("/",(req,res,next)=>{

});