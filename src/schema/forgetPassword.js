const mongoose = require("mongoose");

let forgetPassword = new mongoose.Schema({
    token :{
        type:String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
});

module.exports = mongoose.model("forgetPassword",forgetPassword);
