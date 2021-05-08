const got = require('got');

bot.ebot.on("message", (msg) => {
    if (!msg.messageText) return;
    if (msg.messageText.startsWith("^4Head")){ 
        (async () => {
            try {
                const response = await got('https://official-joke-api.appspot.com/random_joke').json();
                bot.ebot.say(msg.channelName, `${response.setup} ${response.punchline} 4Head`);
        }   
            catch (error){
                bot.ebot.say(msg.channelName, 'BibleThump API Error');
        }
        })()
    }
});


