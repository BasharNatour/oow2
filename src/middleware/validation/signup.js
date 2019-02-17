const User = require("../../schema/user");
const bcrypt = require("bcrypt");




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

        if (first.length < 4 || second.length < 4) {
            errs.name = true;

        }
        if (!/[\d\w]{7,}/.test(password)) {
            errs.password = true;
        }
        if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
            errs.email = true;
        }
        if (Object.keys(errs).length) {
            res.render("signup", {
                errs
            });
            return;
        }
        bcrypt.hash(password, 10).then((hash) => {
            const user = new User({
                firstName: first,
                lastName: last,
                password: hash,
                email: email


            });
            user.save().then(() => {
                req.session.user_id = user._id;
                res.redirect("/dashboard");
            });
        });
    }