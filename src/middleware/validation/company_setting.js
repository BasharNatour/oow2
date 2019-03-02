const ValidationError = require("../../errors/validationError");
const multer = require("multer");



module.exports = function companyValidation(req, res, next) {
    const {
        name,
        categary,
        description,
        image,
        city,
        street,
        features,
        conditions

    } = req.body;
    let errors = {};
    console.log(req.file);
    
    if(name.length < 4){
        errors.name = "This field is required";
        return next(new ValidationError(errors));
    }
    if(description.length < 4){
        errors.description = "This field is required";
        return next(new ValidationError(errors));
    }
    if(city.length < 4){
        errors.city = "This field is required";
        return next(new ValidationError(errors));
    }
    if(street.length < 4){
        errors.street = "This field is required";
        return next(new ValidationError(errors));
    }
    if(features.length < 4){
        errors.features = "This field is required";
        return next(new ValidationError(errors));
    }
    else{
        next();
    }

}