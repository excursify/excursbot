// Spammerino in chatterino
// note to self: improve this disgusting code 🤬 
bot.ebot.on("message",  (msg) => {  
    
        if (!msg.messageText){
            return;
        }
        const spltText = msg.messageText.split(/\s+/);
        const splcText = spltText.slice(1,-1);
        const spmlmt = spltText.pop();
        const num = new Number(spmlmt);
        const spam = splcText.join(" ");
        if (spltText[0] === "^spam") {
            for (let i = 0; i <= num; i++){
                bot.ebot.say(msg.channelName, spam);
                }
            }
           
        }
 )