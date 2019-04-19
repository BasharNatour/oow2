const transporter = require("./transporter"); 



module.exports = function resetPassword(user,token){
    return user.generateResetpasswordToken().then((verify)=>{
        let mailOptions = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: user.email,
            subject: "Hello ✔", // Subject line
            html: `<b>Hello world?</b>
            <a href="${process.env.DOMAIN}/reset-Password/${verify.token}">Reset</a>
            `// html body
        };
        return transporter.sendMail(mailOptions);
    });
    
};