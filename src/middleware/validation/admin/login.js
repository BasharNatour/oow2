const validator = require("validator");
const ValidationError = require("../../../errors/validationError");

module.exports = function loginValidator(req, res, next) {
    const { email, password } = req.body;

    const errs = {};
    if (!email || !validator.isEmail(email))
        errs.email = "Please enter a valid email";
    if (!password)
        errs.password = "Please enter your password"

    if (Object.keys(errs).length)
        return next(new ValidationError(errs));
    return next();
}