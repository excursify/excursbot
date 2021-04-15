// Hello Command
bot.ebot.on("message", (msg) => {
    if (msg.messageText === "^hello"){
      bot.ebot.say(msg.channelName, `👋 Okayge ${msg.displayName}`);
    }
  });