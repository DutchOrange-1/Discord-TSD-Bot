module.exports = {
    name: 'not_watching',
    description: "Reasons for TSD not to watch the print",
    execute(message, args){
        message.channel.send("Follow this link if TSD says 'not watching':");
        message.channel.send("https://www.thespaghettidetective.com/docs/detective-not-watching/");
        message.channel.send("Use **-thanks @username** if this helped");
    }
}