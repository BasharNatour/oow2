const CountriesSeeder = require("./countries");
const mongoose = require("mongoose");

let url = process.env.MONGO_URL;
mongoose.connect(url, {
    useNewUrlParser: true
});

CountriesSeeder.then(()=>{
    console.log("Database Seeded");
    process.exit();
}).catch(console.log)