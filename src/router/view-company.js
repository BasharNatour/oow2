const express = require("express");
const router = new express.Router();
module.exports = router;
const User = require("../schema/user");

router.get("/:id",(req,res)=>{
   User.findById(req.params.id).then((company)=>{
        res.render("profile-version-2",{
            user:company,
            readOnly:true
        });  
   })  
});