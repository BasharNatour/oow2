const express = require("express");
const router = new express.Router();
module.exports = router;



const main          = require("./main");
const subscription  = require("./subscription");
const signup        = require("./signup");
const signin        = require("./signin");
const verify        = require("./verify");
const resend        = require("./resend");
const updatePassword = require("./update-password");

const company       = require("./company");
const client        = require("./client");
const logout        = require("./logout");
const removeAccount = require("./removeAccount");
const complaints    = require("./complaint");
const ourSections   = require("./ourSections");
const companies     = require("./companies");

const activeted     = require("../middleware/activeted");
const guest         = require("../middleware/guest");
const authenticated = require("../middleware/authenticated");
const populateUser  = require("../middleware/populate_user");
const isUser        = require("../middleware/is-user");
const isCompany     = require("../middleware/is-company");
const companyProfile = require("./company-profile");
const userProfile = require("./user-profile");
const removePictureOrvideo = require("./remove-picture-video");
const companyVideo = require("./company-video");
const viewCompany  = require("./view-company");
const termsPrivacy =require("./termsPrivacy");
const homePlan =require("./homePlan");
const contract = require("./contract");
const time = require("./time");
const orderCompany = require("./order-company");
const orderUser = require("./order-user");
const viewService = require("./view-service");
const viewContract = require("./view-contract");
const admin = require("./admin");



const search =require("./search");
const rejection =require("./rejection");
const accept =require("./accept");
const done =require("./done");
const forget =require("./forgetPassword");
const resetPassword =require("./resetPassword");

const next = require("next");
const path = require("path");




router.use("/admin/api", admin);

const app = next({ dev : true, dir : path.join(process.cwd(), "admin/src") });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    router.get("/admin/category/:id", (req, res) => {
        app.render(req, res, "/category", { category : req.params.id });
    });

    router.use("/admin", handle);
    router.use("/admin/*", handle);
    router.get("/_next/*", (req, res) => {
        handle(req, res);
    });
}).catch(console.log);

router.use("/",populateUser,main);
router.use("/subscribe",subscription);

router.use("/signup",guest,signup);
router.use("/signin",guest,signin);
router.use("/verify",authenticated,verify);
router.use("/resend",authenticated,resend);
router.use("/search",[authenticated,populateUser,activeted],search);
router.use("/logout",logout);
router.use("/remove-account",[authenticated,populateUser,activeted],removeAccount);
router.use("/complaints",[authenticated,populateUser,activeted],complaints);
router.use("/oursections",[authenticated,populateUser,activeted],ourSections);
router.use("/company-profile",[authenticated,populateUser,isCompany,activeted],companyProfile);
router.use("/user-profile",[authenticated,populateUser,isUser,activeted],userProfile);
router.use("/view-company",[authenticated,populateUser,activeted],viewCompany);
router.use("/view-service",[authenticated,populateUser,activeted],viewService);
router.use("/company-video",[authenticated,populateUser,isCompany,activeted],companyVideo);
router.use("/remove",[authenticated,populateUser,isCompany,activeted],removePictureOrvideo);
router.use(company);
router.use(client);
router.use("/companies",[authenticated,populateUser,activeted],companies);
router.use("/update",[authenticated,populateUser,activeted],updatePassword);
router.use("/termsPrivacy",termsPrivacy);
router.use("/homePlan",homePlan);
router.use("/contract",[authenticated,populateUser,isUser,activeted],contract);
router.use("/time",time);
router.use("/forget",forget);
router.use("/reset-Password",resetPassword);
router.use("/order-company",orderCompany);
router.use("/order-User",[authenticated,populateUser,isUser,activeted],orderUser);
router.use("/view-contract",[authenticated,populateUser,activeted],viewContract);
router.use("/reject",[authenticated,populateUser,isCompany,activeted],rejection);
router.use("/accept",[authenticated,populateUser,isCompany,activeted],accept);
router.use("/done",[authenticated,populateUser,isCompany,activeted],done);




