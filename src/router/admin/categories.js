const express = require("express");
const multer = require("multer");
const router  = new express.Router();
module.exports = router;

// const categoryValidator = require("../../middleware/validation/admin/category");
const Category = require("../../schema/category");

const { DOMAIN } = require("../../../defaults");

const path = require("path");

const domainify = (doc) => ({ ...(doc.toObject ? doc.toObject() : doc), image : `${DOMAIN}${doc.image}`, background : `${DOMAIN}${doc.background}` });

router.get("/", (req, res, next) => {
    Category
        .find({})
        .sort({ _id : -1 })
        .then((docs) => {
            res.json({ data : docs.map(domainify)});
        }).catch(next);
});


router.get("/:id", (req, res, next) => {
    Category
        .findById(req.params.id)
        .then((doc) => res.json({ data : domainify(doc) }))
        .catch(next);
});


const storage = multer.diskStorage({
    destination: "./public/img/our-section",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

// init upload
var upload = multer({
    storage: storage
});


router.post("/", upload.fields([{name: "image"}, { name : "background" }]), (req, res, next) => {
    const category = new Category(req.body);
    category.image      = path.join("/img/our-section", req.files.image[0].filename);
    category.background = path.join("/img/our-section", req.files.background[0].filename);
    category
        .save()
        .then(() => res.json({ data : domainify(category) }))
        .catch(next);
});

router.put("/:id", upload.fields([{name: "image"}, { name : "background" }]), (req, res, next) => {
    const data = req.body;
    Category
        .findById(req.params.id)
        .then(doc => {
            doc.name            = data.name;
            doc.description     = data.description;
            doc.longdescription = data.longdescription;
            if (req.files.image)
                doc.image      = path.join("/img/our-section", req.files.image[0].filename);
            if (req.files.background)
                doc.background = path.join("/img/our-section", req.files.background[0].filename);
            doc
                .save()
                .then(() => res.json({ data : domainify(doc) }))
                .catch(next);
        })
        .catch(next);
});


router.delete("/:id", (req, res, next) => {
    Category
        .findById(req.params.id)
        .then((doc) => doc.remove())
        .then(() => res.sendStatus(200))
        .catch(next);
});