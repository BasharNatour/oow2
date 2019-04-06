const express = require("express");
const router = new express.Router();
module.exports = router;
const fs = require("fs");
const path = require("path");
const Unauthorized = require("../errors/unauthorized");




router.post("/picture", (req, res, next) => {
    // console.log(path.join(process.cwd(), "public", req.body.myImage));
    if(req.user.companyData.images.indexOf(req.body.myImage) === -1){
        return next(new Unauthorized());
    }
    fs.unlink(path.join(process.cwd(), "public", req.body.myImage), (err) => {
        req.user.companyData.images = req.user.companyData.images.filter((x) => {
            return x !== req.body.myImage;
        })
        req.user.save().then(() => {
            res.redirect("/company-profile");

        }).catch(next);
    });

});

router.post("/video", (req, res, next) => {
    if(req.user.companyData.videos.indexOf(req.body.delvideo) === -1){
        return next(new Unauthorized());
    }
    fs.unlink(path.join(process.cwd(), "public", req.body.delvideo), (err) => {
        req.user.companyData.videos = req.user.companyData.videos.filter((x) => {
            return x !== req.body.delvideo;
        })
        req.user.save().then(() => {
            res.redirect("/company-profile");

        }).catch(next);
    });

});