const express =require("express");
const router = new express.Router();
module.exports = router;
const ValidationError = require("../../errors/validationError");


module.exports = function updatePassword (req,res,next){
    const {newPassword , confirmPassword} = req.body;
    let errors = {};
    if(!newPassword || newPassword.length < 7){
        errors.newpassword = "The password must contain 7 characters at least"
    }
    if(!confirmPassword || confirmPassword.length < 7){
        errors.confirmPassword = "The password must contain 7 characters at least"
    }
    if(newPassword !== confirmPassword){
        errors.newpassword = "The new password and confirm Password does not match"; 
    }
    if (Object.keys(errors).length) {
        console.log(errors);
        return next(new ValidationError(errors));
    } else {
        next();
    }
}