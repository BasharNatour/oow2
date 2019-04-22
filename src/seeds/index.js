const CountriesSeeder = require("./countries");
const CategoriesSeeder = require("./categories");
const AdminsSeeder = require("./admins");
const mongoose = require("mongoose");

let url = process.env.MONGO_URL;
mongoose.connect(url, {
    useNewUrlParser: true
});
Promise.all([
    CountriesSeeder(),
    CategoriesSeeder(),
    AdminsSeeder()
]).then(()=>{
    console.log("Database Seeded");
    process.exit();
}).catch(console.log);