const User = require("../../schema/user");
const bcrypt = require("bcrypt");
const ValidationError = require("../../errors/validationError");
const Governorates = require("../../schema/governorates");






module.exports = function (req, res, next) {
    const {
        first,
        last,
        email,
        password,
        city,
        contact
    } = req.body;
    const err = {};

    if (first.length < 4 || last.length < 4) {
        errs.name = "The name most contain 5 characters at least";

    }
    if (!/.{7,}/.test(password)) {
        errs.password = "The password most contain 7 charactersat least";
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
            city
        }).then((count) => {
            if (count === 0) {
                errs.governorate = "error";
            }
            if (Object.keys(errs).length) {
                return next(new ValidationError(errs));
            } else {
                next();
            }
        })

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