const express = require("express");
const session = require("express-session");
const connectMongo = require("connect-mongo")(session);
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ValidationError = require("./src/errors/validationError");
const NotFoundError   = require("./src/errors/not-found-error");
const Unauthorized   = require("./src/errors/unauthorized");
const Unauthenticated   = require("./src/errors/unauthenticated");
const flash = require("connect-flash");



let url = process.env.MONGO_URL;
mongoose.connect(url, {
    useNewUrlParser: true
});
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let SESSION_CONFIG = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.ENVIRONMENT === "production",
        expires: 1000 * 60 * 60 * 24
    },
    store:new connectMongo({
        url: url,
        ttl: 60 * 60 * 24,
    })
};


app.use(session(SESSION_CONFIG));

app.use(flash());
app.use(express.static("public"));
app.use((req, res, next) => {
    res.locals = {
        errors: req.flash("error")[0] || {},
        old: req.flash("old")[0]||{},
        success: req.flash("success")[0] || {}

    };
    // console.log(res.locals);
    next();
});
app.use(require("./src/router"));

app.use((error, req, res, next) => {
    if (req.header("Accept").toLowerCase().indexOf("application/json") > -1) {
        if (error instanceof ValidationError) {
            res.status(422);
            res.json({ errors : error.errors });
        } else if (error instanceof Unauthenticated) {
            res.status(401);
            res.json({ message : "Unauthenticated" });
        } else {
            res.status(500);
            res.json({ message : "Something happaned" });
        }
    } else {
        if (error instanceof ValidationError) {
            req.flash("error", error.errors);
            req.flash("old", req.body);
            // console.log(error.errors);
            res.redirect('back');
        }
        else if (error instanceof NotFoundError) {
            res.end("Not Found Page 404");
            console.log(error.stack);
        }
        else if(error instanceof Unauthorized){
            res.end(" Unauthorized 403");
        }
        else{
            res.end("Server error 500");
            console.log(error);
        }
    }
});

app.listen(80, "0.0.0.0", () => {
    console.log('App listening on port 80!');
});