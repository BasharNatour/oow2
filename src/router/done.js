const express = require("express");
const router = new express.Router();
module.exports = router;
const Contract = require("../schema/contract")

router.post("/:id",(req,res,next)=>{
    const id = req.params.id;
    Contract.findById(id).then((contract)=>{
        if(contract.done){
            return next (new Unauthorized());
        }
        contract.done = true;
        contract.save().then(()=>{
            req.flash("success", {message : " contract statue was set to done successfully "});
            res.redirect(`/order-Company`)
        }).catch(next);
    }).catch(next);
});