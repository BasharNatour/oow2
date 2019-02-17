const express = require("express");
const session = require("express-session");
const connectMongo = require("connect-mongo")(session);
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ValidationError = require("./src/errors/validationError");
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

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.ENVIRONMENT === "production",
        expires: 1000 * 60 * 60 * 24
    },
    store: new connectMongo({
        url: url,
        ttl: 60 * 60 * 24,
    })
}));

app.use(flash());
app.use(express.static("public"));
app.use((req, res, next) => {
    res.locals = {
        errors: req.flash("error")[0] || {}
    };
    next();
});
app.use(require("./src/router"));
app.use((error, req, res, next) => {
    if (error instanceof ValidationError) {
        req.flash("error", error.errors);
        res.redirect('back');
    } else {
        console.log(error);
    }
});

app.listen(80, () => {
    console.log('App listening on port 80!');
});