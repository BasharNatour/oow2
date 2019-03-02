const User = require("../../schema/user");
const bcrypt = require("bcrypt");
const ValidationError = require("../../errors/validationError");
const Governorates = require("../../schema/governorates");






module.exports = function (req, res, next) {
    const {
        firstName,
        lastName,
        email,
        password,
        governorate,
    } = req.body;
    const errs = {};

    if (!(firstName && firstName.length)) {
        errs.firstName = "The name most contain 5 characters at least";

    }
    if (!(lastName && lastName.length)) {
        errs.lastName = "The name most contain 5 characters at least";

    }
    if (!/.{7,}/.test(password)) {
        errs.password = "The password most contain 7 characters at least";
    }
    if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
        errs.email = "The email your entered is invalid";
    }
    User.countDocuments({
        email
    }).then((count) => {
        if (count > 0) {
            errs.email = "This email your entered already exists";
        }
        return Promise.resolve();
    }).then(() => {
        Governorates.countDocuments({
            _id:governorate
        }).then((count) => {
            if (count === 0) {
                errs.governorate = "error";
            }
            if (Object.keys(errs).length) {
                console.log(errs);
                return next(new ValidationError(errs));
            } else {
                next();
            }
        }).catch(next);

    }).catch(next);

}
// bcrypt.hash(password, 10).then((hash) => {
//     const user = new User({
//         firstName: first,
//         lastName: last,
//         password: hash,
//         email: email


//     });
//     user.save().then(() => {
//         req.session.user_id = user._id;
//         res.redirect("/dashboard");
//     });
// });