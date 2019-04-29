const express = require("express");
const router  = new express.Router();
module.exports = router;

const Complaint = require("../../schema/complaint");

const complaintReplyMail = require("../../mail/complaint-reply");


router.get("/", (req, res, next) => {
    const { page = 1 } = req.query;

    Promise.all([
        Complaint.find({}).sort({ _id : -1 }).skip((page - 1) * 10).limit(10),
        Complaint.countDocuments()
    ])
    .then(([data, total]) => {
        res.json({ data, total });
    }).catch(next);
});


router.delete("/:id", (req, res, next) => {
    Complaint
        .findById(req.params.id)
        .then((doc) => doc.remove())
        .then(() => res.sendStatus(200))
        .catch(next);
});

router.post("/:id/reply", (req, res, next) => {
    const { message } = req.body;
    Complaint
        .findById(req.params.id)
        .then(doc => complaintReplyMail(doc.email, message))
        .then(() => res.sendStatus(200))
        .catch(next);
});