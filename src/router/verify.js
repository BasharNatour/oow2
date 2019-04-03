const express = require("express");
const router = new express.Router();
module.exports = router;
const Verify = require("../schema/verify");
const ServerError = require("../errors/serverError");
const populateUser = require("../middleware/populate_user");

router.get("/",populateUser,(req,res)=>{
    if(req.user.activated){
        return res.redirect("/");
    }
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
