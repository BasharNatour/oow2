const User = require("../../schema/user");
const ValidationError = require("../../errors/validationError");
const bcrypt = require("bcrypt");



module.exports = function (req,res,next){
    const {
        email,
        password
    }=req.body; 
    errors = {};

    User.findOne({email}).then((doc)=>{
        if(!doc){
            errors.signinError = "Email Or Password is invalid";
            return next(new ValidationError(errors));
        }
        bcrypt.compare(password, doc.password).then((truthy) => {
            if(!truthy){
                errors.signinError = "Email Or Password is invalid";
                return next( new ValidationError(errors));
            }
            else{
                next();
            }
        }).catch(next)

        
    }).catch(next);






}