const express = require("express");
const router = new express.Router();
module.exports = router;
const multer = require("multer");
const path   = require("path");

router.get("/",(req,res)=>{
    res.render("profile-version-2",{user:req.user,readOnly:false});
    
});
const storage = multer.diskStorage({
    destination:"./public/uploads/company",
    filename: function (req,file,cb){
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

// init upload
var upload = multer({ storage: storage });

router.post("/",upload.fields([{ name:'myImages'}]),(req,res,next)=>{
    console.log(req.files);

    if(req.files.myImages){
    let images = req.files.myImages;
    let result = [];
        if(!req.files) res.redirect("/company-profile");
        images.forEach(function(element) {
            req.user.companyData.images.push("/uploads/company/" + element.filename);
          });
          req.user.save().then(()=>{
            res.redirect("/company-profile");
        }).catch(next);
    }

    else{
        res.redirect("/company-profile");
    }
});

