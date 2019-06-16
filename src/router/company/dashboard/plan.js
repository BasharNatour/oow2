const express = require("express");
const router = new express.Router();
module.exports = router;
const Plan = require("../../../schema/plan");
const populate_user = require("../../../middleware/populate_user");
const User = require("../../../schema/user");

router.get("/",populate_user,(req, res, next) => {
    console.log(req.user.companyData.plan);
    if(req.user.hasActivePlan()){
        return res.redirect("/search")
    }
    Plan.find({}).then((docs) => {
        res.render("plan", {
            docs
        });
    })
});

router.post("/", populate_user, (req, res, next) => {
    Plan.findById(req.body.plan_id).then((yourPlain) => {
        let duration = yourPlain.duration * 1;
        var futureTime = Date.now() + (yourPlain.duration * 30 * 24 * 60 * 60 * 1000);
        req.user.companyData.plan = {
            planId: req.body.plan_id,
            endDate: new Date(futureTime)
        };
        req.user.save().then(() => {
           res.redirect("/company-profile");
        }).catch(next);
    }).catch(next);

});