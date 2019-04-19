const express = require("express");
const router = new express.Router();
module.exports = router;
const Unauthorized = require("../errors/unauthorized")
const Contract = require("../schema/contract");

router.post("/:id",(req,res,next)=>{
    const id = req.params.id;
    Contract.findById(id).then((contract)=>{
        if(contract.accepted){
            return next (new Unauthorized());
        }
        contract.accepted = false;
        contract.save().then(()=>{
            req.flash("success", {message : " This contract is rejected "});
            res.redirect(`/order-Company`)
        }).catch(next);

    }).catch(next);
});