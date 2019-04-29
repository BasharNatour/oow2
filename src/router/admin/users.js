const express = require("express");
const router  = new express.Router();
module.exports = router;

const User = require("../../schema/user");

const PROJECTION = {
    firstName : 1,
    lastName  : 1,
    email     : 1,
    disabled  : 1,
    type      : 1
};

router.get("/", (req, res, next) => {
    const { page = 1 } = req.query;

    Promise.all([
        User.find({}, PROJECTION).sort({ _id : -1 }).skip((page - 1) * 10).limit(10),
        User.countDocuments()
    ])
    .then(([data, total]) => {
        res.json({ data, total });
    }).catch(next);
});


router.put("/:id", (req, res, next) => {
    User
        .findById(req.params.id)
        .then((doc) => {
            doc.disabled = req.body.disabled;
            return doc.save();
        })
        .then(() => res.sendStatus(200))
        .catch(next);
});

router.delete("/:id", (req, res, next) => {
    User
        .findById(req.params.id)
        .then((doc) => doc.remove())
        .then(() => res.sendStatus(200))
        .catch(next);
});