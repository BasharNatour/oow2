const mongoose = require("mongoose");


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
        type: Schema.Types.ObjectId,
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
            type:Schema.type.ObjectId,
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
              type:Schema.type.ObjectId,
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
module.exports = mongoose.model("users", users);