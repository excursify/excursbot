bot.ebot.on("message",  (msg) => {  
    if (!msg.messageText){
        return;
    }
    const spltText = msg.messageText.split(/\s+/);
    const slcText = spltText.slice(1);
    const echo = slcText.join(" ");
    if (spltText[0] === "^echo") {
            bot.ebot.say(msg.channelName, echo);
        }
    }
);