const express = require("express");
const router = new express.Router();
module.exports = router;
const ValidationUpdatePassword = require("../middleware/validation/update-password");
const bcrypt = require("bcrypt");
const User = require("../schema/user");

router.get("/", (req, res) => {
    res.render("remove-account-user", {
        user: req.user
    });
});
router.post("/", ValidationUpdatePassword, (req, res, next) => {
    const {
        newPassword,
        confirmPassword
    } = req.body;
    bcrypt.compare(newPassword, req.user.password, function (err, result) {
        if (result) {
            User.findByIdAndDelete(req.user._id).then((doc) => {
                req.session.destroy(function (err) {
                    res.redirect("/");
                });
            });
        } else {
            res.redirect("/search");
        }

    });
});