const express =require("express");
const router = new express.Router();
module.exports = router;
const notFoundError = require("../errors/not-found-error"); 

module.exports = function isCompany (req,res,next){
    if(req.user.type === "company") next();
    else next(new notFoundError());
}