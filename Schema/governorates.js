const mongoose = require("mongoose");


let governorates = new mongoose.Schema({
    name:{
        type:String,
        enum:["Alexandria","Aswan","Asyut","Beheira	","Beni Suef","Cairo","Dakahlia",
              "Damietta","Faiyum","Gharbia","Giza","Ismailia","Kafr El Sheikh","Luxor", 
            "Matruh","Minya","Monufia","New Valley","North Sinai","Port Said","Qalyubia",
            "Qena","Red Sea","Sharqia","Sohag","South","Suez"]
        },
    country:{
        type: Schema.Types.ObjectId,
        ref:"countries"
    }
});

module.exports = mongoose.model("governorates",governorates);
	
	
	
	
	
	
	
	
 
	
