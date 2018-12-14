const mongoose = require("mongoose");


let governorates = new mongoose.Schema({
    name:{
        type:String,
        },
    country:{
        type: Schema.Types.ObjectId,
        ref:"countries"
    }
});

module.exports = mongoose.model("governorates",governorates);
	
	
	
	
	
	
	
	
 
	
