const express = require("express");
const router = new express.Router();
module.exports = router;
const Category = require("../../../schema/category");
const ValidationError = require("../../../errors/validationError");
const companyValidation = require("../../../middleware/validation/company_setting");
const User =require("../../../schema/user");
const multer = require("multer");
const path   = require("path");
const populate_user =require("../../../middleware/populate_user");

router.get("/",populate_user,(req,res,next)=>{
    Category.find({}).then((categories)=>{
        res.render("setting-worker",{
            categories,
            user : req.user
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
var upload = multer({ storage: storage });


router.post("/",[upload.single('myImage')],companyValidation,(req,res,next)=>{
    userId = req.session.user_id;
    const {
        name,
        categary,
        description,
        city,
        street,
        phone,
        telephone,
        features,
        conditions
        
    } = req.body;
            
    User.findById(userId).then((doc)=>{
        
        if(req.file){
            doc.profileimage = "/uploads/" + req.file.filename;
        }
        
        doc.companyData.name = name;
        doc.companyData.categary = categary;
        doc.companyData.description =description;
        doc.companyData.location={city,street};
        doc.companyData.features = features;
        if(conditions){doc.companyData.conditions=conditions}
        if(phone){doc.telephone = telephone}
        doc.phone = phone;
        doc.save().then(()=>{
            res.redirect("/dashboard/service");
        }).catch(next);
    }).catch(next);
    
});