const Unauthenticated = require("../../../errors/unauthenticated");
const jwt   = require("jsonwebtoken");


module.exports = function isLoggedIn(req, res, next) {
    const token = req.get("Authorization");
    console.log(token);
    if (token) {
        jwt.verify(token, "keyboard-cat", (err, data) => {
            if (err) return next(new Unauthenticated());
            else next();
        });
    } else {
        next(new Unauthenticated());
    }
};