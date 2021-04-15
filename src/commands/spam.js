// Spammerino in chatterino
// code improved lole xd
bot.ebot.on("message",  (msg) => {  
    
        if (!msg.messageText) return;   
        if (msg.messageText.startsWith('^spam')){
            spammerino(msg);
        }
        }
 )


 function spammerino (msg){
    
        const spltText = msg.messageText.split(/\s+/);
        const splcText = spltText.slice(1,-1);
        const spmlmt = spltText.pop();
        const num = new Number(spmlmt);
        const spam = splcText.join(" ");
        for (let i = 0; i <= num; i++){
            bot.ebot.say(msg.channelName, spam);
            }
 }