module.exports = {
    name: 'help',
    description: "All common help commands",
    execute(message, args){
        message.channel.send("```OctoPrint is showing as offline  :``` <https://www.thespaghettidetective.com/docs/octoprint-is-offline/> ");
        message.channel.send("```The Detective says 'not watching':``` <https://www.thespaghettidetective.com/docs/detective-not-watching/> ");
        message.channel.send("```The webcam is not streaming      :``` <https://www.thespaghettidetective.com/docs/webcam-feed-is-not-showing/>");
        message.channel.send("```Turn on TSD's debug logging      :``` <https://www.thespaghettidetective.com/docs/turn-on-debug-logging/> ");
        message.channel.send("```More on the help page            :``` <https://www.thespaghettidetective.com/help/>");
        message.channel.send("Use **-thanks @username** if this helped");
    }
}















