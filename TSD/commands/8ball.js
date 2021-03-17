module.exports = {
    name: '8ball',
    description: "8ball",
    execute(message, args){
                 
    const randomVal = Math.floor(Math.random() * 13); 
        console.log(randomVal); 
        
    switch (randomVal) {
        
        case 0:
            message.channel.send("No"); 
            break;
        case 1:
            message.channel.send("Yes"); 
            break;
        case 2:
            message.channel.send("Possibly "); 
            break;
        case 3:
            message.channel.send("I dont know ? "); 
            break; 
        case 4:
            message.channel.send("Yes indeed");
            break; 
        case 5:
            message.channel.send("DEFINITELY NOT "); 
            break;
        case 6:
            message.channel.send("Iam sleeping, let me rest, all this spaghetti watching is hard !!!!"); 
            break;
        case 7:
            message.channel.send("Maybe..."); 
            break;    
        case 8:
            message.channel.send("Must I really answer you? "); 
        break;

        case 9:
            message.channel.send("Uncertain"); 
            break;

        case 10:
        message.channel.send("I dont get paid enough for this..."); 
        break;

        case 11:
            message.channel.send("YES"); 
            break;

        case 12:
        message.channel.send("NO"); 
        break;

    }
 }
}
