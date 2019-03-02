const express = require("express");
const router = new express.Router();
module.exports = router;
const Category = require("../../schema/category");
const ValidationError = require("../../errors/validationError");
const companyValidation = require("../../middleware/validation/company_setting");
const User =require("../../schema/user");
const multer = require("multer");
const path   = require("path");

router.get("/",(req,res,next)=>{
    Category.find({}).then((categories)=>{
        res.render("setting-worker",{
            categories
        });
    }).catch(next);
});

const storage = multer.diskStorage({
    destination:"./public/uploads/",
    filename: function (req,file,cb){
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

// init upload
const upload = multer({ dest: "./public/uploads"});


router.post("/",[upload.single('myImage'),companyValidation],(req,res,next)=>{
    userId = req.session.user_id;
    const {
        name,
        categary,
        description,
        image,
        city,
        street,
        features,
        conditions
        
    } = req.body;
            
    console.log(req.file);
    
    // upload(req,res,(err)=>{
    //     if(err){
    //         res.render("setting-worker");
    //     }else{
    //         res.send("successfully");
    //     }
    // });

    // User.findById(userId).then((doc)=>{
        
    // })

});