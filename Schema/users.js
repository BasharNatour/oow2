const mongoose = require("mongoose");


let users = new mongoose.Schema({
    firstName = {
        type: String,
        required: true
    },
    lastName = {
        type: String,
        required: true
    },
    governorates = {
        type: Schema.Types.ObjectId,
        ref: "governorates",
        require: true
    },
    email = {
        type: String,
        required: true
    },
    password = {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["marry", "work"],
        default: "marry"
    },
    phone:{
        type:String,
        required:true
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
            ref:"categary"
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
        plan:{
            type:Schema.type.ObjectId,
            endDate: Date,
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