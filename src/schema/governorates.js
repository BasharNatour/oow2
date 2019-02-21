const mongoose = require("mongoose");


let governorates = new mongoose.Schema({
    name:{
        type:String,
        },
    country:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"countries"
    }
});

module.exports = mongoose.model("governorates",governorates);
	
	
	
	
	
	
	
	
 
	
