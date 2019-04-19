const express = require("express");
const router = new express.Router();
module.exports = router;
const Contract = require("../schema/contract");

router.get("/:id",(req,res)=>{
    const yourContract = req.params.id;
    Contract.findById(yourContract).populate("company").populate("user").then((per_contract)=>{
        if(req.user.type === "company"){
            res.render("contract",{
                loggedin : req.user,
                company:req.user,
                user: per_contract.user,
                contract: per_contract,
                readOnly:true
            })
        }
        else{
          res.render("contract",{
            loggedin : req.user,
            company:per_contract.company,
            user: req.user,
            contract: per_contract,
            readOnly:true    
        }); 
        }
        
    }).catch(console.log);

});
