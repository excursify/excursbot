bot.ebot.on("message", (msg) => {
    if(!msg.messageText) return;
    if (msg.messageText === '^dice') {
        const num = rollDice();
        bot.ebot.say(msg.channelName, `You rolled ${num} !`);
    }
});

function rollDice(){
    const sides = 6;
    return Math.floor(Math.random() * sides ) + 1;
}


