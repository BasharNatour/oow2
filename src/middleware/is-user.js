const express =require("express");
const router = new express.Router();
module.exports = router;
const notFoundError =require("../errors/not-found-error");

module.exports = function isUser (req,res,next){
    if(req.user.type === "client") next();
    else next(new notFoundError());
}