const chalk = require("chalk");
const Admin = require("../schema/admin");

module.exports = function adminsSeeder (){
    return new Promise((resolve,reject)=>{
        Admin.deleteMany({}).then(()=>{
            return Admin.create([
                {name : "Admin", email : "admin@mail.com", password : "qwe123"}
            ]);
        }).then(() => {
            console.log(chalk.green("Admins were seeded successfully!"));
            resolve();
        }).catch(reject);
    });
}