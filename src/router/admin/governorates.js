const express = require("express");
const router  = new express.Router();
module.exports = router;

const Governorate = require("../../schema/governorates");

router.post("/", (req, res, next) => {
    const governorate = new Governorate(req.body);
    console.log(governorate);
    governorate
        .save()
        .then(() => res.json({ data : governorate }))
        .catch(next);
});

router.put("/:id", (req, res, next) => {
    const data = req.body;
    Governorate
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
    Governorate
        .findById(req.params.id)
        .then((doc) => doc.remove())
        .then(() => res.sendStatus(200))
        .catch(next);
});