const transporter = require("./transporter"); 



module.exports = function verify(user,token){
    return user.generateVerifyToken().then((verify)=>{
        let mailOptions = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: user.email,
            subject: "Hello ✔", // Subject line
            html: `<body>
            <table class="body-wrap">
              <tr>
                <td class="container">
                  <table>
                    <tr>
                      <td class="masthead" align="center">
                        <h1>oow </h1>
                      </td>
                    </tr>
                    <tr>
                      <td class="content" td>
                        <h2>All Things Guests, One Easy Place</h2>
                        <p>Find and book your dream team of local pros with personalized vendor, photographer and more... recommendations based on your style and budget.</p>
                        <table>
                          <tr>
                            <td align="center">
                              <p><a class="button" href="#">Share the Awesomeness</a></p>
                            </td>
                          </tr>
                        </table>
                        <p></p>
                      </td>
                      <td class="container"></td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="content footer" align="center">
                  <table>
                    <tr>
                      <td class="content footer" align="center">
                        <p>Sent by <a href="${process.env.DOMAIN}/verify/${verify.token}">Verify</a>, ALL CONTENT COPYRIGHT © 2018 </p>
                        <p><a href="mailto:">oow@support.com</a></p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>`,
            // 
            // `// html body
        };
        return transporter.sendMail(mailOptions);
    });
    
};