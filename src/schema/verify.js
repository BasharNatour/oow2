const mongoose = require("mongoose");






let verify = new mongoose.Schema({

    token :{
        type:String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }


});
module.exports = mongoose.model("verify", verify);