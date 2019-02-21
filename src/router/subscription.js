const express = require("express");
const router  = new express();
module.exports = router;
const subscription = require("../middleware/validation/subscription");
const SubscriptionSchema = require("../schema/subscription");

router.post("/",subscription,(req,res)=>{
       // email = req.body.email;
              email = req.email;
       new SubscriptionSchema({
              email
          }).save().then(()=>{
              return res.redirect("/");
          }).catch((err)=>{
              console.log(err);
          });

});