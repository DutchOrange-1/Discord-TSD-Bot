module.exports = {
    name: 'YT',
    description: "The TSD YT channel",
    execute(message, args){

        const randomVal2 = Math.floor(Math.random() * 9); 

        switch (randomVal2) {

            case 0:
                message.channel.send("WOW"); 
                break;
            case 1:
                message.channel.send("You had a 2% chance"); 
                break;
            case 2:
                message.channel.send("Hello world Iam also here"); 
                break;
            case 3:
                message.channel.send("I am all of your best friends "); 
                break; 
            case 4:
                message.channel.send("Are you my friend ? ");
                break; 
            case 5:
               message.channel.send(' https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg '); 
                break;
            case 6:
                message.channel.send("Your print is failing , go check it "); 
                break;
           case 7:
               message.channel.send("All this spaghetti watching is hard... "); 
               break;
           case 8:
               message.channel.send("https://media.tenor.co/videos/abef0926681685642145f1f54f024daf/mp4"); 
                break;
       
        }
       }
    }
