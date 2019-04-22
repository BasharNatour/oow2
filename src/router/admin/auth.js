const express = require("express");
const router = new express.Router();
module.exports = router;

const loginValidator = require("../../middleware/validation/admin/login");
const Admin = require("../../schema/admin");
const bcrypt = require("bcrypt");

const jwt   = require("jsonwebtoken");

router.post("/login", loginValidator, (req, res, next) => {
    console.log(req.body);
    const { email, password } = req.body;
    Admin.findOne({ email })
        .then((doc) => {
            if (doc) {
                bcrypt.compare(password, doc.password).then((truthy) => { 
                    if (!truthy) { 
                        return res.sendStatus(401);
                    }
                    res.json({
                        data : {
                            _id   : doc._id,
                            name  : doc.name,
                            email : doc._id,
                            token : jwt.sign({ _id : doc._id }, "keyboard-cat")
                        }
                    });
                }).catch(next);
            } else {
                res.sendStatus(401);
            }
        })
        .catch(next);
});