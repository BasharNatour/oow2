const express =require("express");
const router = new express.Router();
module.exports = router;
const bcrypt = require("bcrypt");
const ValidationUpdatePassword = require("../middleware/validation/update-password");




router.get("/",(req,res)=>{
    res.render("update-password",{user:req.user});
});


router.post("/",ValidationUpdatePassword,(req,res)=>{
    const {currentPassword , newPassword , confirmPassword} = req.body;
    bcrypt.compare( currentPassword , req.user.password, function(err, result) {
        if(result){
            bcrypt.hash(newPassword, 10).then((hash) => {
                req.user.password = hash;
                req.user.save().then(()=>{
                    req.flash("success", {message : "successfully updated password"});
                    return res.redirect("/update")  
                }).catch(console.log);
                
            }).catch(console.log);
        }
        else{
            req.flash("error", {message : "your old password is wrong"});
            return res.redirect("/update")
        }
        
        // res == true
    });
        
});

