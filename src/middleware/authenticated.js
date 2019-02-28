module.exports = function authenticated(req, res, next) {
    if (req.session.user_id) next();
    else res.redirect("/signin?redirect=" + req.originalUrl);
};