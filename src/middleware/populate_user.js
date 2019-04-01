const User =require("../schema/user");


module.exports = function populate_user(req,res,next){
    if(req.session.user_id){
        User.findById(req.session.user_id).populate({ path: 'governorate', populate: { path: 'country' }}).then((doc)=>{
            req.user = doc;
            next();
        }).catch(next)
    }else{
        next();
    }
}