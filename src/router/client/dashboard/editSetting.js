const express = require("express");
const router = new express.Router();
module.exports = router;
const populate_user = require("../../../middleware/populate_user");
const Country =require("../../../schema/country");
const Governorate= require("../../../schema/governorates");
const isUser        = require("../../../middleware/is-user");
const multer = require("multer");
const path   = require("path");


router.get("/",(req,res,next)=>{
    const user = req.user;
    Country.find({}).then((countries)=>{
    Governorate.find({}).then((governorates)=>{

        res.render("edit-setting-user",{user,countries,governorates});
    }).catch(next);
    }).catch(next);
});

const storage = multer.diskStorage({
    destination:"./public/uploads/",
    filename: function (req,file,cb){
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});


// init upload
var upload = multer({ storage: storage });

router.post("/",[upload.single('myImage')],(req,res,next)=>{
     const {firestName , lastName, country, governorate,phone , telephone ,idNationalCard} = req.body;

   
    if(req.file){
        req.user.profileimage = "/uploads/" + req.file.filename;
    }

    req.user.firestName = firestName;
    req.user.lastName = lastName;
    req.user.governorate =  governorate;
    req.user.governorate.country = country;
    req.user.phone = phone;
    req.user.idNationalCard = idNationalCard;
    if(telephone){
        req.user.telephone = telephone;
    }
    req.user.save().then(()=>{
        res.redirect("/search");
    }).catch(next);

});