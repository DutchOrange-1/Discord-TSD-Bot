module.exports = {
    name: 'thanks',
    description: "Just to say thanks",
    execute(message, args){

        let NumberOfThanks = 0; 
        var pattedone = message.mentions.members.first();
        var UserName = message.author.id;
        if(pattedone.id == UserName){
            
            message.channel.send(`TSD is watching you <@${pattedone.id}> Dont do it.`);
        }else{
        NumberOfThanks = NumberOfThanks + 1; 
        message.reply(`You have Thanked <@${pattedone.id}> `+ NumberOfThanks);   
    }}
}