const mongoose = require("mongoose");
const path     = require("path");
const fs       = require("fs");
const util     = require("util");

let categories = new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    background:{
        type:String
    },
    longdescription:{
        type:String
    },
});

categories.post("remove", { query : true, document : true }, function (next) {
    Promise.all([
        util.promisify(fs.unlink)(path.join(process.cwd(), "public", this.background)),
        util.promisify(fs.unlink)(path.join(process.cwd(), "public", this.image))
    ])
    .then(next)
    .catch(next);
});

module.exports = mongoose.model("categories",categories);