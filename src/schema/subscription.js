const mongoose = require("mongoose");

subscription = new mongoose.Schema({
    email:{
        type: String
    }
});
module.exports = mongoose.model("Followers",subscription);