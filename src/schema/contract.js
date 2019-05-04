const mongoose = require("mongoose");

const contract =  new mongoose.Schema({
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    date:{
        type:Date
    },
    services:{
        type:[
            mongoose.Schema.Types.ObjectId,
        ]
    },
    notes:{
        type:String
    },
    accepted:{
        type:Boolean,
    },
    done:{
        type:Boolean,
        default:false
    },
    message:{
        type:String
    }


    
});
function prefix(n){
    return n < 10? "0"+n : n;
}

contract.methods.getDateString = function getDateString (){
    const date = this.date;
    return(`${date.getFullYear()}-${prefix(date.getMonth()+1)}-${prefix(date.getDate())}`);
}

contract.methods.getTimeString = function getTimeString (){
    const date = this.date;
    return(`${prefix(date.getHours())}:${prefix(date.getMinutes())}`);
}


module.exports = mongoose.model("contracts", contract);