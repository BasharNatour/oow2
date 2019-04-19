const express = require("express");
const router = new express.Router();
module.exports = router;
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: "./public/uploads/company/videos",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

// init upload
var upload = multer({
    storage: storage
});

router.post("/", upload.fields([{
    name: 'video'
}]), (req, res, next) => {

    if (req.files.video) {
        let videos = req.files.video;
        let result = [];
        if (!req.files) res.redirect("/company-profile");
        videos.forEach(function (element) {
            req.user.companyData.videos.push("/uploads/company/videos/" + element.filename);
        });
        req.user.save().then(() => {
            res.redirect("/company-profile");
        }).catch(next);
    } else {
        res.redirect("/company-profile");
    }
    

});