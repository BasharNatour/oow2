const User = require("../../schema/user");
const ValidationError = require("../../errors/validationError");



module.exports = function (req,res,next){
    const {
        email,
        password
    }=req.body; 
    errors = {};

    User.findOne({email}).then((doc)=>{
        if(!doc || !doc.password === password){
            errors.signinError = "Email Or Password is invalid";
            return next( new ValidationError(errors));
        }
        else{
            next();
        }

        
    }).catch(console.log);






}