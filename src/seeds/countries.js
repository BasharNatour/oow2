const Country = require("../schema/country");
const chalk = require("chalk");
const Governorate = require("../schema/governorates");

module.exports = new Promise((resolve,reject) => {
    
    Country.deleteMany({}).then(() => {
        return Country.create([
            {name:"Egypt"},
            {name:"Syria"}
        ]);
    }).then(([egypt,syria])=>{
        return Governorate.deleteMany({}).then(() => {
            const egyptGovernorates = Governorate.create([
                {name:"Cairo", country : egypt._id},
                {name:"Alexandria", country : egypt._id},
                {name:"Aswan", country : egypt._id},
                {name:"Asyut", country : egypt._id},
                {name:"Beni Suef", country : egypt._id},
                {name:"Faiyum", country : egypt._id},
                {name:"Giza", country : egypt._id},
                {name:"Ismailia", country : egypt._id},
                {name:"Kafr El Sheikh", country : egypt._id},
                {name:"Luxor", country : egypt._id},
                {name:"Minya", country : egypt._id},
                {name:"Red Sea", country : egypt._id},
                {name:"Sohag", country : egypt._id}
            ]);
            const syriaGovernorates = Governorate.create([
                {name:"Rif Dimashq", country : syria._id},
                {name:"Hama", country : syria._id},
                {name:"Idlib", country : syria._id},
                {name:"Damascus", country : syria._id},
                {name:"Daraa", country : syria._id},
                {name:"Homs", country : syria._id},
                {name:"Al-Hasaka", country : syria._id},
                {name:"Tartus", country : syria._id},
                {name:"Deir ez-Zor", country : syria._id},
                {name:"Aleppo", country : syria._id},
                {name:"Raqqa", country : syria._id},
                {name:"Latakia", country : syria._id},
                {name:"As-Suwayda", country : syria._id},
                {name:"Quneitra", country : syria._id}
            ]);
            return Promise.all([egyptGovernorates, syriaGovernorates]);
        });
    }).then((data) => {
        console.log(chalk.green("Countries were seeded successfully!"));
        resolve(data);
    }).catch(reject);
}); 