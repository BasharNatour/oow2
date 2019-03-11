const express = require("express");
const router = new express.Router();
module.exports = router;
const Verify = require("../schema/verify");
const ServerError = require("../errors/serverError");

router.get("/",(req,res)=>{
    res.render("verify");
});
router.get("/:token",(req,res,next)=>{
    Verify.findOne({token:req.params.token}).populate("user").then((doc)=>{
        if(doc){
            doc.user.activated = true;
            doc.user.save().then(() => {
                doc.delete().catch(console.log);
                
                res.redirect("/dashboard/company_setting");
            });
        }else{
            next(new ServerError());
        }
    }).catch(next);
});
