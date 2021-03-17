module.exports = {
    name: 'compatibility',
    description: "compatibility mode",
    execute(message, args){
        message.channel.send("Follow this link to enable compatibility mode:");
        message.channel.send("https://www.thespaghettidetective.com/docs/streaming-compatibility-mode/");
    }
}