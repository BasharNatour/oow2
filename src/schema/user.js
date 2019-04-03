
const mongoose = require("mongoose");
const bcrypt  = require("bcrypt");
const Verify = require("./verify");
const randomstring = require("randomstring");
const mongoosePaginate =require("mongoose-paginate");
let users = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    activated:{
        type : Boolean,
        default:false
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
            //optional
        },
        services:[
            {name :String,
             description :String,   
             price :Number   
            }
        ],
        plan : {
            planId : {
              type:mongoose.Schema.Types.ObjectId,
              ref : "plans"
            },
            endDate: {
                type:Date,
            },
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
    if(this.isNew){
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    }).catch(console.log);
}else{
    next();
}
});
users.methods.generateVerifyToken = function generateVerifyToken(){
    return Verify.findOne({user:this._id}).then((doc)=>{
        if(doc){
            doc.token = randomstring.generate(200);
            return doc.save();
        }
        const verify = new Verify({
            token : randomstring.generate(200),
            user: this._id
        });
        return verify.save();
    });
    
};
users.plugin(mongoosePaginate);
module.exports = mongoose.model("users", users);