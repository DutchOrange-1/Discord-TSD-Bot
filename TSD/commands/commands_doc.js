module.exports = {
    name: 'commands_doc',
    description: "Commands",
    execute(message, args){
        message.channel.send(
        //"Here are some commands, use the ** - ** :\n**'help'** = for common problems. \n**'cam'** = for Camera help \n**'tsd'**  = TSD Web Page \n**'git'** = TSD Git hub. \n**'price'** = Prices for TSD service. \n**'laggy'** = If your camera is laggy. \n**'not_watching'** = If your camera is not streaming. \n**'octoprint'** = TSD on the Octoprint Plugin page. \n**'what'** = Explains what TSD and why you should get it.\n**'compatibility_mode'** = compatibility mode "
        "Here are some commands: \n \n**-Debug** = To see how to enable debug logging \n**-cam** = For camera placement help. \n**-laggy** = If your camera is laggy. \n**-not_watching** = If your camera is not streaming. \n**-compatibility_mode** = How to enable compatibility mode. \n**-what** = Explains what TSD is and why you should get it. \n**-price** = Prices for the TSD service. \n**-octoprint** = TSD's Octoprint Plugin page. \n**-tsd** = TSD's Web Page. \n**-git** = TSD's Git hub. \n**-socials** = TSD's Socials \n**-View** = For quick acess to the web view.\n**-Tunneling** = Info On Tunneling \n"

        );                                                                                                                                                                                               
    }
}