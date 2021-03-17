module.exports = {
    name: 'cam',
    description: "Optimal Camera angles",
    execute(message, args){
        message.channel.send("It is preferred to have the camera on the **corner of the bed** or frame to see **2 sides** of the print and if it is on the print bed it will be more stable (when having a bedslinger). It's also best to have **even lighting** and not over **exposure** of the camera. Also make sure there is nothing in the background like a **bush**,** trees **or **cables **that can cause** false detection**. Try not to use** reflective backgrounds**. \nHere are some examples: https://www.thespaghettidetective.com/docs/optimal-camera-setup/ \n https://www.thespaghettidetective.com/img/camerasetups/cam19.jpg");
        message.channel.send("Use **-thanks @username** if this helped");
    }
}