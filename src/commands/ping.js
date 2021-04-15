function timeformat(seconds){
  function pad(s){
      return (s < 10 ? '0' : '') + s;
  };
  var hours = Math.floor(seconds/ (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var sec = Math.floor(seconds % 60);
  
  return pad(hours) + ':' + pad(minutes) + ":" + pad(sec);
}

bot.ebot.on("message", (msg) => {

  if (msg.messageText === "^ping"){
    bot.ebot.say(msg.channelName,`Pong! FeelsDankMan 🏓 Uptime:  + ${timeformat(process.uptime())}`);
  }
});