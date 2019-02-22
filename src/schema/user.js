const mongoose = require("mongoose");
const bcrypt  = require("bcrypt");


let users = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    governorate :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "governorates",
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["client", "company"],
        default:"client"
    },
    phone:{
        type:String,
    },
    telephone:{
        type:String,
        //optional
    },
    profileimage:{
        type:String,
        // optional
    },
    companyData:{
        name:String,
        categary:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"categories"
        },
        description:{
            type:String
        },
        location:{
            city:String,
            street:String
        },
        features:{
            type:String
        },
        conditions:{
            type:String
        },
        services:[
            {name :String,
             description :String,   
             price :Number   
            }
        ],
        plan : {
            plan : {
              type:mongoose.Schema.Types.ObjectId,
              ref : "plans"
            },
            endDate: Date
          },
        images:[
            {
                type:String,
            }
        ],
        videos:[
            {
                type:String,
            }
        ]
    }



});
users.pre("save",function(next){
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    }).catch(console.log);
});

module.exports = mongoose.model("users", users);