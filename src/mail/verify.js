const transporter = require("./transporter"); 



module.exports = function verify(user,token){
    return user.generateVerifyToken().then((verify)=>{
        let mailOptions = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: user.email,
            subject: "Hello ✔", // Subject line
            html: `<b>Hello world?</b>
            <a href="${process.env.DOMAIN}/verify/${verify.token}">Verify</a>
            `// html body
        };
        return transporter.sendMail(mailOptions);
    });
    
};