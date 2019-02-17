const subscription = require("../../schema/subscription");
const validator = require("validator");
const ValidationError = require("../../errors/validationError");

module.exports = function auth(req, res, next) {
    let email = req.body.email;
    const errors = {};
    if (!validator.isEmail(email)) {
        errors.email = "Your email is invalid"
        return next(new ValidationError(errors));
    }
    // else if (Object.keys(errors).length) {
    // }
    subscription.findOne({email}).then((doc)=>{
        if(doc){
            errors.email ="This email already exists";
            return next(new ValidationError(errors));
        }
        else{
            email = new subscription({
                email
            }).save(function (err) {
                if (err) return handleError(err);
              
                else{
                    return next();
                }
              });

              
              
        }
    });
}