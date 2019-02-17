const mongoose = require("mongoose");


let complaints = new mongoose.Schema({
    user:{
        type:Schema.type.ObjectId,
        ref:"user"
    },
    description:{
        type:String
    },
    title:{
        type:String
    }   
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             