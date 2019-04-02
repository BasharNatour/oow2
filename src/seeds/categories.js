const chalk = require("chalk");
const Category = require("../schema/category");

module.exports = function categories(){
    return new Promise((resolve,reject)=>{
        Category.deleteMany({}).then(()=>{
            return Category.create([
                {name:"Wedding Venues",description:"Browsing wedding venues is among the very first steps of planning your big day.",image:"/img/our-section/Mask Group 17.png",background:"../img/our-section/worker/bg_directory-hero-wedding-venues.jpg",longdescription:"Browsing wedding venues is among the very first steps of planning your big day. But with so many wedding venues to choose from, how do you find The One? First, consider the style of venue you’d like: Garden or beach? Ballroom or barn? Then, read reviews of wedding venues in your desired city and select a few to tour in person. Happy venue hunting!"},

                {name:"Photography",description:"Finding a wedding photographer is not only about choosing a pro who takes great pictures.",image:"/img/our-section/Mask Group 12.png",background:"../img/our-section/worker/bg_directory-hero-wedding-photographers.jpg",longdescription:"Finding a wedding photographer is not only about choosing a pro who takes great pictures. Personality plays a big role in selecting a wedding photographer—you’re going to be spending a lot of time with your photographer on your big day! Browse these wedding photographers to see examples of their work and read reviews from past clients."},

                {name:"Wedding Caterers",description:"Wedding caterers have an important role to play—making sure the food and drink are top notch on your big day!",image:"/img/our-section/Mask Group 11.png",background:"../img/our-section/worker/bg_directory-hero-wedding-caterers.jpg",longdescription:"Wedding caterers have an important role to play—making sure the food and drink are top notch on your big day! Whether you’d prefer a casual buffet-style meal or a formal plated dinner, wedding caterers will create a delicious menu your guests won’t soon forget. Be sure to read reviews on WeddingWire of wedding caterers before booking!"},

                {name:"Beauty Center",description:"Wedding hair stylists and wedding makeup artists will help you look and feel your best on your big day.",image:"/img/our-section/Mask Group 13.png",background:"../img/our-section/worker/bg_directory-hero-wedding-beauty-health.jpg",longdescription:"Wedding hair stylists and wedding makeup artists will help you look and feel your best on your big day, whether you want to look fresh and natural or totally glam. It’s a good idea to hire professional wedding hair stylists and wedding makeup artists to ensure that your hair and makeup stay put whether you’re posing for photos or dancing the night away."},

                {name:"Wedding Flowers",description:"Wedding florists create beautiful arrangements to set the mood for your big day.",image:"/img/our-section/Mask Group 19.png",background:"../img/our-section/worker/bg_directory-hero-wedding-florists.jpg",longdescription:"Wedding florists create beautiful arrangements to set the mood for your big day. A wedding florist will help determine your style and design bouquets, centerpieces, and more to decorate your venue. We recommend hiring a wedding florist about 10 months before your big day to ensure you have plenty of time to turn your dreams into reality."},

                {name:"Wedding Cakes",description:" a professional wedding cake baker can create a confection to suit your style, as well as the design!",image:"/img/our-section/Mask Group 18.png",background:"../img/our-section/worker/bg_directory-hero-wedding-cakes.jpg",longdescription:"The wedding cake is often the focal point of a reception. Whether you’re eyeing a classic cake decorated with fresh flowers or a more modern design, a professional wedding cake baker can create a confection to suit your style. When booking a wedding cake baker, be sure to schedule a tasting so can you can pick your cake’s flavors, as well as the design!"},

                {name:"Dress & Attire",description:" Looking for the wedding dress of your dreams? These bridal shops are here to help!",image:"/img/our-section/Mask Group 20.png",background:"../img/our-section/worker/bg_directory-hero-wedding-dresses.jpg",longdescription:"Looking for the wedding dress of your dreams? These bridal shops are here to help! Read reviews of bridal shops, and start shopping for your wedding gown at least eight months before your big day. It often takes months from the time a bridal shop orders your gown until it arrives, and don’t forget to factor alterations into your schedule!"},

                {name:"Music",description:"From the prelude to the recessional, that specializes in musical genres from country to jazz, R&B to rock",image:"/img/our-section/21.png",background:"../img/our-section/worker/bg_directory-hero-wedding-ceremony-musicians.jpg",longdescription:"From the prelude to the recessional, wedding musicians provide live music to make your ceremony a memorable one. There are so many wedding musicians to choose from, including string ensembles, harpists, organists, guitarists, and more. Be sure to consider the location of your ceremony and your wedding style before making a decision."},

                {name:"Favors & Gifts",description:"Wedding favors are another way to say “thank you” to your guests for joining you on your special day.",image:"/img/our-section/Mask Group 21.png",background:"../img/our-section/worker/bg_directory-hero-wedding-favors.jpg",longdescription:"Wedding favors are another way to say “thank you” to your guests for joining you on your special day. We recommend starting to browse wedding favors and gifts (such as those for bridesmaids, groomsmen, and parents) about three months before your wedding, especially if you’re planning on personalizing your wedding favors or gifts."},
          
            ]);
            
        }).then(() => {
            console.log(chalk.green("Categories were seeded successfully!"));
            resolve();
        }).catch(reject);
    });

}