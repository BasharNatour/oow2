const express = require("express");
const router  = new express.Router();
module.exports = router;

// const categoryValidator = require("../../middleware/validation/admin/category");
const Category = require("../../schema/category");

const { DOMAIN } = require("../../../defaults");

router.get("/", (req, res, next) => {
    Category
        .find({})
        .sort({ _id : -1 })
        .then((docs) => {
            res.json({ data : docs.map(doc => ({ ...doc.toObject(), image : `${DOMAIN}${doc.image}`, background : `${DOMAIN}${doc.background}` })) });
        }).catch(next);
});

router.post("/", (req, res, next) => {
    const category = new Category(req.body);
    category
        .save()
        .then(() => res.sendStatus(200))
        .catch(next);
});

router.put("/:id", (req, res, next) => {
    Category
        .findByIdAndUpdate(req.params.id)
        .then((doc) => res.json({ data : doc.toObject() }))
        .catch(next);
});


router.delete("/:id", (req, res, next) => {
    Category
        .findById(req.params.id)
        .then((doc) => doc.remove())
        .then(() => res.sendStatus(200))
        .catch(next);
});