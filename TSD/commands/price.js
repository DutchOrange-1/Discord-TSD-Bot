module.exports = {
    name: 'price',
    description: "Prices of TSD",
    execute(message, args){
        message.channel.send("Follow this link to see TSD's pricing: \n https://app.thespaghettidetective.com/ent/pricing/");
    }
}