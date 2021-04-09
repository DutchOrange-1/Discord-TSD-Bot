const Discord = require('discord.js');
const client = new Discord.Client();
var thanksmessageID = 0; 
const prefix = '-';

const statuses = [
"Version = 1.7",
"Watching prints!",
"SO much spaghetti!",
"Keep on watching, keep on watching",
"I love spaghetti!",
"My AI is too powerful",
"How do you spell spagheti ? ",
"Hi, welcome to Chili’s", 
"8 ball where are you.",
"-help",
"-help",
"-Help",
"-Help"
];
const spaghetiReplys = [
"You spelt spagheti wrong.",
"We all make spelling mistakes",
"Its spelt Spa-ghe-tti."
];
 
const fs = require('fs');

client.commands = new Discord.Collection();




const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log('TSD is online!');


  //  client.user.setActivity('Watching Prints!');
    
});
 var NumberOfThanks = 0;
client.on('message', message =>{
    var d = new Date();
    if((Math.floor(Math.random()* 10) >= 5)){
    var randomNumber = Math.floor(Math.random() * (statuses.length));  
   // console.log("Random number = " + randomNumber);
    client.user.setActivity(statuses[randomNumber])
    }else{
        client.user.setActivity("Watching prints!"); 
    } 

   // =========================================================================================================================================================================================================================================================
    if( message.author.bot) return;

    const str = message.content.toLowerCase();
    const regex = new RegExp('thank');
    const regex1 = new RegExp('thx');
    const regex2 = new RegExp('thanks');
    const regex3 = new RegExp('@');
    
    if(!(message.channel.id == '661431553905262596'  || message.channel.id == '661368008781987841')){
    if((regex.test(str) === true || regex2.test(str) === true || regex1.test(str) === true ) && regex3.test(str) === false && (message.reference == null)) {
    //    message.channel.send(" <@"+ message.author.id + "> If you were trying to thank someone,\nPlease say \"thank you @user_you_want_to_thank\" so that we can properly credit them. \nHere is some more info : <https://www.thespaghettidetective.com/blog/2021/03/24/get-involved-and-get-detective-hours/>").then(msg => {
           
              message.reply("If you were trying to thank someone,\nPlease say \"thank you @user_you_want_to_thank\" so that we can properly credit them. \nHere is some more info : <https://www.thespaghettidetective.com/blog/2021/03/24/get-involved-and-get-detective-hours/>").then(sent => { // 'sent' is that message you just sent
                let id = sent.id;
                thanksmessageID = id; 
                console.log(d.toLocaleTimeString() + " - - " + id + " Someon forgot to thank at ");
               // message.channel.send(thanksmessageID); 
              });

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
            console.log(d.toLocaleTimeString() + " 8 ball is being used ");
            }
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
const regexSpelling1 = new RegExp('spageti');
const regexSpelling2 = new RegExp('spagetti');
const regexSpelling3 = new RegExp('spageti');
const regexSpelling4 = new RegExp('spagetti');
const regexSpelling5 = new RegExp('spagheti');
const regexSpelling6 = new RegExp('spahetti');

if (regexSpelling1.test(str) === true || regexSpelling2.test(str) === true  || regexSpelling3.test(str) === true  || regexSpelling4.test(str) === true || regexSpelling5.test(str) === true || regexSpelling6.test(str) === true){   
    const randomVal = Math.floor(Math.random() * 3); 

        console.log(d.toLocaleTimeString() + " Someone spelled Spagheti wrong");
        message.channel.send(spaghetiReplys[randomVal]);
     
    }


//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
const regexX = new RegExp('tsd');

if (regexX.test(str) === true  ){   
          
    const randomVal = Math.floor(Math.random() * 30); 
      
     if(randomVal == 1){
       
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        client.commands.get('8ball').execute(message, args);
        console.log(d.toLocaleTimeString() + " TSD HAS BEE ACTIVATED ");
}
}
// =========================================================================================================================================================================================================================================================

   if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    
 
    var d = new Date();

    if(command === 'tsd'){    //TSD Website
        console.log("tsd page a been brought up");
        message.channel.send("https://www.thespaghettidetective.com/");

    } else if (command === 'cam' || command === 'Camera' || command === 'Cam' || command === 'camera'){  //Camera 
        client.commands.get('cam').execute(message, args);
        console.log(d.toLocaleTimeString() + " Camera Command used ");

    } else if (command === 'not_watching' || command === 'Not_watching'){    //TSD not watching  //Add more reasons 
        client.commands.get('not_watching').execute(message, args);
        console.log(d.toLocaleTimeString() + " Not Watching Command used ");

    } else if (command === 'Help2' || command === 'help2'){  //Other commands
        client.commands.get('help').execute(message, args);
        
    } else if (command === 'help' || command === 'Help'){    //Common help pages
        client.commands.get('commands_doc').execute(message, args);
        console.log(d.toLocaleTimeString() + " Help Command used ");

    } else if (command === 'price'|| command === 'Price'){   //Cost of TSD
        client.commands.get('price').execute(message, args); 
        console.log(d.toLocaleTimeString() + " Price Command used ");

    } else if (command === 'git' || command === 'Git'){   //The Git Hub    commands_doc
        client.commands.get('git').execute(message, args); 
        console.log(d.toLocaleTimeString() + " Git Command used ");

    } else if (command === 'yt' || command === 'Yt' || command === 'YT' || command === 'YouTube' || command === 'youtube' || command === 'You Tube' || command === 'you tube' ){   //YT channle
        client.commands.get('YT').execute(message, args); 
        console.log(d.toLocaleTimeString() + " YouTube Command used ");

    } else if (command === 'What' ||command === 'what' || command === 'What is it' || command === 'what is it'){   //What TSD is 
        client.commands.get('what_is_tsd').execute(message, args); 

    } else if (command === 'OctoPrint' || command === 'octoprint' ||  command === 'Octo Print' ||  command === 'octo print' ){   //TSD in Octoprint
        client.commands.get('OctoPrint').execute(message, args); 
        console.log(d.toLocaleTimeString() + " Octoprint Command used ");

    } else if (command === 'Hi' || command === 'hi' ||  command === 'Hello' ||  command === 'Hey'||  command === 'hey' ){   //Just saying Hi 
        client.commands.get('Hi').execute(message, args);
        console.log(d.toLocaleTimeString() + " Hi Command used ");

    } else if (command === 'Compatibility_mode' || command === 'compatibility_mode'){   //Compatability mode  
        client.commands.get('compatibility').execute(message, args);
        console.log(d.toLocaleTimeString() + " Combatability Command used ");
                                                                                                       //All commands added up to here
    }else if(command === 'test'){                                                                                                                                                                   //Used for testing commands 
        message.channel.send(' Hey ');
        console.log(d.toLocaleTimeString() + " Test Command used ");
      



    } else if (command === 'laggy' || command === 'Laggy'|| command === 'lag'|| command === 'Lag'){   //Laggy Camera 
        client.commands.get('laggy').execute(message, args);
        console.log("Lag commands called");

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
        message.channel.send(`Pong - Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms \nLocal time :  ` + d.toLocaleTimeString());
        console.log(d.toLocaleTimeString() + " Ping coammand ");
    
    }else if (command === 'debug'|| command === 'Debug'|| command === 'log' || command === 'Log'){   //Commands   //
            message.channel.send("https://www.thespaghettidetective.com/docs/turn-on-debug-logging/")  
            console.log(d.toLocaleTimeString() + " Debug Command used ");
    
     }else if (command === 'Tunneling'|| command === 'tunneling'){   //Commands   //
            message.channel.send("https://www.thespaghettidetective.com/docs/octoprint-tunneling/") 
            console.log(d.toLocaleTimeString() + " Tunneling Command used ");

    }else if (command === 'Widget'|| command === 'widget'){   //Commands   //
            message.channel.send("Link? ") 
            console.log(d.toLocaleTimeString() + " widget Command used ");

    }else if (command === 'spaghetti'|| command === 'Spaghetti'){   //Commands   //
            message.channel.send("Oh no, dont tell me you are making a mess !!") 
            console.log(d.toLocaleTimeString() + " Spaghetti Command used ");

    }else if (command === 'spagheti'|| command === 'Spagheti'){   //Commands   //
            message.channel.send("You spelt it wrong    :person_facepalming: ") 
            console.log(d.toLocaleTimeString() + " Spaghetti Command used ");

    }else if (command === 'spagetti'|| command === 'Spagetti'){   //Commands   //
            message.channel.send("You spelt it wrong  :person_facepalming: ") 
            console.log(d.toLocaleTimeString() + " Spaghetti Command used ");

        }else if (command === 'welcome-message-update'){   //Commands   //
            console.log(d.toLocaleTimeString() + " Updating welcome message");
            client.commands.get('welcome').execute(message, args); 

        }else if (command === 'announcement'){ //  announcment

            
            if(//(message.channel.author = '822438562531377162') || 
            (message.channel.author = '203924364385583114') ||
            (message.channel.author = '153626781113516032') ||
            (message.channel.author = '572932609575878659') ||
            (message.channel.author = '621117690622378024') ||
            (message.channel.author = '558419224402460673')
          
            ){

                message.channel.send("Uplaoding...")
                console.log(d.toLocaleTimeString() + " Updating announcement ");
                //  client.commands.get('announcment').execute(message, args); 
      
      
                args2 = message.content.slice(14).split(2);
              // message.channel.send(args2 + " "); 
      
                  client.channels.cache.get('804610601166700584').send(args2 + "   ");
            } else {
                message.channel.send("Nice try bud")
            }


        

         


        }else if (command === 'Version'|| command === 'version'){   //Version           
            message.channel.send( statuses[0]); 
            console.log(d.toLocaleTimeString() +statuses[0]);


    }else if (command === 'no'){   //Commands   //
var removePrefix = message.content.replace('-no',''); 
removePrefix = thanksmessageID;
message.channel.messages.fetch(removePrefix).then(message => message.delete()).catch(console.error)  //catch(console.error

console.log("Message "  + thanksmessageID + " Was deleated")
message.delete(); 
     
    }else{
        message.channel.send(d.toLocaleTimeString() + "  Not a command, see ** -help**.")
    }

    
}); 

client.login('   ');
