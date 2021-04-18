// Russiaan Roulette command
// need to fix some of this command, kinda ugly

bot.ebot.on("message", (msg) => {
    if (!msg.messageText) return;
    if (msg.messageText.startsWith("^rr")){
        let splText = msg.messageText.split(/\s+/);
        let timeDefault = 60;
        let rrResult = getRandomInt(min , max);
        if (rrResult < 6){
            bot.ebot.say (msg.channelName , `You are safe!`);
        } else if (isNaN(splText[1])){
            bot.ebot.timeout(msg.channelName , msg.displayName , timeDefault , "rr Command");
            bot.ebot.say(msg.channelName , `Bang! It is the end for you ${msg.displayName}`);
        } else {
            bot.ebot.timeout(msg.channelName , msg.displayName , timeNumber , "rr Command");
            bot.ebot.say(msg.channelName , `Bang! It is the end for you ${msg.displayName}`);
        } 
    }
});

var min = 1; var max = 6;

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}