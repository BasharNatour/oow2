const transporter = require("./transporter"); 



module.exports = function resetPassword(email,body){
    let mailOptions = {
        from    : '"OOW 👻" <foo@example.com>',   // sender address
        to      : email,
        subject : "Thank you for your complaint",      // Subject line
        html    : body
    };
    return transporter.sendMail(mailOptions);
};