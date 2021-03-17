const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';
 
const fs = require('fs');

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log('TSD is online!');
    bot.user.setActivity('Watching Prints!');
    
});
 var NumberOfThanks = 0;
client.on('message', message =>{
    

   // =========================================================================================================================================================================================================================================================
    if( message.author.bot) return;

    const str = message.content.toLowerCase();
    const regex = new RegExp('thank');
    const regex1 = new RegExp('thx');
    const regex2 = new RegExp('thanks');
    const regex3 = new RegExp('@');
    
    if(!(message.channel.id == '661431553905262596'  || message.channel.id == '661368008781987841')){
    if((regex.test(str) === true || regex2.test(str) === true || regex1.test(str) === true ) && regex3.test(str) === false && (message.reference == null)) {
        message.channel.send(" <@"+ message.author.id + "> If you were trying to thank someone,\nPlease say \"thank you @user_you_want_to_thank\" so that we can properly credit them.");
        
        console.log("Someon forgot to thank     " + message.author.username); 

    } 
    }
    //= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
    const regexY = new RegExp('8 ball');
    const regex1Y = new RegExp('8 Ball');
    const regex2Y = new RegExp('8ball');

    if (regexY.test(str) === true || regex2Y.test(str) === true || regex1Y.test(str) === true ){   //Commands   //
    
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
            client.commands.get('8ball').execute(message, args);
            }
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
const regexX = new RegExp('tsd');

if (regexX.test(str) === true  ){   
          
    const randomVal = Math.floor(Math.random() * 50); 
      
     if(randomVal == 1){
        console.log("TSD HAS BEEN ACTIVATED");
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        client.commands.get('8ball').execute(message, args);
}
}
// =========================================================================================================================================================================================================================================================

   if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 

    if(command === 'tsd'){    //TSD Website
        const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
        .setColor('0x6a0dad')
        .setTitle("The Spaghetti detective")
        .setDescription("Whether you're worried about print failures, fire hazards, or network security, The Spaghetti Detective has got your back.")
        //.setTimestamp()
        //.setFooter("This is a footer")
        //.setAuthor("This is the author's name") //and this its profile pic)
        .addField("Click this link for TSD home page:", "<https://www.thespaghettidetective.com/>")
        //.setImage("https://cdn.discordapp.com/attachments/672710249232203786/819229129979330590/image.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/672710249232203786/819229129979330590/image.png")
        
        message.channel.send(embed);

    } else if (command === 'cam' || command === 'Camera' || command === 'Cam' || command === 'camera'){  //Camera 
        client.commands.get('cam').execute(message, args);

    } else if (command === 'not_watching' || command === 'Not_watching'){    //TSD not watching  //Add more reasons 
        client.commands.get('not_watching').execute(message, args);

    } else if (command === 'Help2' || command === 'help2'){  //Other commands
        client.commands.get('help').execute(message, args);
        
    } else if (command === 'help' || command === 'Help'){    //Common help pages
        client.commands.get('commands_doc').execute(message, args);
         console.log("Help commands called"); 

    } else if (command === 'price'|| command === 'Price'){   //Cost of TSD
        client.commands.get('price').execute(message, args); 

    } else if (command === 'git' || command === 'Git'){   //The Git Hub    commands_doc
        client.commands.get('git').execute(message, args); 

    } else if (command === 'yt' || command === 'Yt' || command === 'YT' || command === 'YouTube' || command === 'youtube' || command === 'You Tube' || command === 'you tube' ){   //YT channle
        client.commands.get('YT').execute(message, args); 

    } else if (command === 'What' ||command === 'what' || command === 'What is it' || command === 'what is it'){   //What TSD is 
        client.commands.get('what_is_tsd').execute(message, args); 

    } else if (command === 'OctoPrint' || command === 'octoprint' ||  command === 'Octo Print' ||  command === 'octo print' ){   //TSD in Octoprint
        client.commands.get('OctoPrint').execute(message, args); 

    } else if (command === 'Hi' || command === 'hi' ||  command === 'Hello' ||  command === 'Hey'||  command === 'hey' ){   //Just saying Hi 
        client.commands.get('Hi').execute(message, args);

    } else if (command === 'Compatibility_mode' || command === 'compatibility_mode'){   //Compatability mode  
        client.commands.get('compatibility').execute(message, args);
                                                                                                       //All commands added up to here
    }else if(command === 'test'){                                                                                                                                                                   //Used for testing commands 
        message.channel.send(' Hey '); 
 
    } else if (command === 'laggy' || command === 'Laggy'|| command === 'lag'|| command === 'Lag'){   //Laggy Camera 
        client.commands.get('laggy').execute(message, args);

    } else if (command === 'Socials' || command === 'socials'|| command === 'Social'|| command === 'social'){   //Social
        client.commands.get('Socials').execute(message, args);

    } else if (command === 'socials'|| command === 'Social'|| command === 'social'){   //Commands   //
        message.channel.send("https://app.thespaghettidetective.com/printers/")

    } else if (command === 'View' || command === 'view'){  // View
        message.channel.send("Use **-web_view** to go to the browser application. \n Use **-app_view** to go to TSD App.")

    } else if (command === 'web_view' || command === 'Web_view'){  // View
        client.commands.get('Web').execute(message, args);    //Web View

    } else if (command === 'app_view' || command === 'App_view'){  // View
        client.commands.get('App').execute(message, args);    //App View

    } else if (command === 'ping' || command === 'Ping'){  // View
        message.channel.send(`Pong -- Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    
    }else if (command === 'debug'|| command === 'Debug'|| command === 'log' || command === 'Log'){   //Commands   //
            message.channel.send("https://www.thespaghettidetective.com/docs/turn-on-debug-logging/")  
    
     }else if (command === 'Tunneling'|| command === 'tunneling'){   //Commands   //
            message.channel.send("https://www.thespaghettidetective.com/docs/octoprint-tunneling/") 

    }else if (command === 'Widget'|| command === 'widget'){   //Commands   //
            message.channel.send("Link? ") 

    }else if (command === 'spaghetti'|| command === 'Spaghetti'){   //Commands   //
            message.channel.send("Oh no, dont tell me you are making a mess !!") 

    }else if (command === 'spagheti'|| command === 'Spagheti'){   //Commands   //
            message.channel.send("You spelt it wrong    :person_facepalming: ") 

    }else if (command === 'spagetti'|| command === 'Spagetti'){   //Commands   //
            message.channel.send("You spelt it wrong  :person_facepalming: ") 


       

    }else if (command === 'Data'|| command === 'data'){   //Commands   //

        const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
        .setColor('0x6a0dad')
        .setTitle("The Spaghetti detective")
        .setDescription("Whether you're worried about print failures, fire hazards, or network security, The Spaghetti Detective has got your back.")
        //.setTimestamp()
        //.setFooter("This is a footer")
        //.setAuthor("This is the author's name") //and this its profile pic)
        .addField("Click this link for TSD home page:", "<https://www.thespaghettidetective.com/>")
        //.setImage("https://cdn.discordapp.com/attachments/672710249232203786/819229129979330590/image.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/672710249232203786/819229129979330590/image.png")
        
        message.channel.send(embed);

    
    }else{
        message.channel.send("Not a command, see ** -help**.")
    }

   


  //===============================================================================================
   


   

       
}); 



/*
const prefix = '-';
 
const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log('TSD is online!');
    bot.user.setActivity('Watching Prints!');
});
 var NumberOfThanks = 0;
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
*/



//price, git hub, Laggy, Octoprint, What, help, not_watching, cam. tsd 
// https://youtu.be/ZpDw9mNBngU
// Embeds https://www.youtube.com/watch?v=I7eZY-SBmf8&list=PLbbLC0BLaGjpyzN1rg-gK4dUqbn8eJQq4&index=5
client.login('Nzk2Njc0OTQ4NzM1MTcyNjI4.X_bXXQ.MsK0nGDCaZvMThcxlf9MxqdufwM');
