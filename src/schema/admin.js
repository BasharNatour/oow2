const mongoose = require("mongoose");
const bcrypt  = require("bcrypt");

let admin = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

admin.pre("save",function(next){
    if(this.isNew){
        bcrypt.hash(this.password, 10).then((hash) => {
            this.password = hash;
            next();
        }).catch(console.log);
    } else {
        next();
    }
});
module.exports = mongoose.model("admin",admin);

