// Spammerino in chatterino
bot.ebot.on("message", (msg) => {

    if (msg.messageText != null){

        const splitMsg = msg.messageText.split(" ");
        const spamLimit = new Number(splitMsg[2]);
      if (splitMsg[0] === "^spam"){
      
            for (let i = 0; i <= spamLimit; i++){
                  bot.ebot.say(msg.channelName, splitMsg[1])
              }
          }
    }
  
}
)
