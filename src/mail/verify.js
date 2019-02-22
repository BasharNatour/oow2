const transporter = require("./transporter"); 



module.exports = function verify(email){
    let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: email,
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
    };
    return transporter.sendMail(mailOptions);
};