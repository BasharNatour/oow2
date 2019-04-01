const express = require("express");
const router = new express.Router();
module.exports = router;
const populate_user = require("../../../middleware/populate_user");

router.get("/",populate_user,(req,res)=>{
    res.render("edit-setting-user");
});