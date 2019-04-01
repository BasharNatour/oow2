const chalk = require("chalk");
const Category = require("../schema/category");

module.exports = function categories(){
    return new Promise((resolve,reject)=>{
        Category.deleteMany({}).then(()=>{
            return Category.create([
                {name:"Wedding Venues",description:"Browsing wedding venues is among the very first steps of planning your big day.",image:"/img/our-section/Mask Group 17.png"},

                {name:"Photography",description:"Finding a wedding photographer is not only about choosing a pro who takes great pictures.",image:"/img/our-section/Mask Group 12.png"},

                {name:"Caterers",description:"Wedding caterers have an important role to play—making sure the food and drink are top notch on your big day!",image:"/img/our-section/Mask Group 11.png"},

                {name:"Beauty Center",description:"Wedding hair stylists and wedding makeup artists will help you look and feel your best on your big day.",image:"/img/our-section/Mask Group 13.png"},

                {name:"Wedding Flowers",description:"Wedding florists create beautiful arrangements to set the mood for your big day.",image:"/img/our-section/Mask Group 19.png"},

                {name:"Wedding Cakes",description:" a professional wedding cake baker can create a confection to suit your style, as well as the design!",image:"/img/our-section/Mask Group 18.png"},

                {name:"Dress & Attire",description:" Looking for the wedding dress of your dreams? These bridal shops are here to help!",image:"/img/our-section/Mask Group 20.png"},

                {name:"Music",description:"From the prelude to the recessional, that specializes in musical genres from country to jazz, R&B to rock",image:"/img/our-section/21.png"},

                {name:"Favors & Gifts",description:"Wedding favors are another way to say “thank you” to your guests for joining you on your special day.",image:"/img/our-section/Mask Group 21.png"},
          
            ]);
            
        }).then(() => {
            console.log(chalk.green("Categories were seeded successfully!"));
            resolve();
        }).catch(reject);
    });

}