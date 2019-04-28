const express = require("express");
const multer = require("multer");
const router  = new express.Router();
module.exports = router;

const Country     = require("../../schema/country");

router.get("/", (req, res, next) => {
    Country
        .aggregate([{
            $lookup : {
                from         : "governorates",
                localField   : "_id",
                foreignField : "country",
                as           : "governorates"
            }
        }]).then((countries) => {
            res.json({ data : countries });
        }).catch(next);
});


router.get("/:id", (req, res, next) => {
    Country
        .findById(req.params.id)
        .then((doc) => res.json({ data : doc }))
        .catch(next);
});


router.post("/", (req, res, next) => {
    const country = new Country(req.body);
    console.log(country);
    country
        .save()
        .then(() => res.json({ data : country }))
        .catch(next);
});

router.put("/:id", (req, res, next) => {
    const data = req.body;
    Country
        .findById(req.params.id)
        .then(doc => {
            doc.name = data.name;
            doc
                .save()
                .then(() => res.json({ data : doc }))
                .catch(next);
        })
        .catch(next);
});


router.delete("/:id", (req, res, next) => {
    Country
        .findById(req.params.id)
        .then((doc) => doc.remove())
        .then(() => res.sendStatus(200))
        .catch(next);
});