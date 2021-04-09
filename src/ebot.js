const login= require('./login');
const { ChatClient } = require("dank-twitch-irc");

const client = new ChatClient(
  {
    username: login.botName,
    password: login.oAuth
  }
)

client.on("connecting", () => client.say(login.chanName,"Trying to join PauseChamp"))
client.on("ready", () => joinedlole());
client.on("close", (error) => {
  if (error != null) {
    console.error("Client closed due to error", error);
  }
});

client.on("PRIVMSG", (msg) => {
  console.log(`[#${msg.channelName}] ${msg.displayName}: ${msg.messageText}`);
});

// Joining Channel
client.connect();
client.join(login.chanName);

// Random Funcion
function joinedlole(){
  console.log("Successfully connected to chat");
  client.say(login.chanName, "Success PagMan 🤘 PAGUEROOOO!!! ");
}


// Colors
client.setColor({r: 95, g: 158, b: 160});

// Simple command 😎 
client.on("message", (msg) => {
  if (msg.messageText === "^hello"){
    client.say(login.chanName," 👋 Okayge " + msg.displayName)
  }
})

module.exports = client;


/*
function timeformat(seconds){
  function pad(s){
      return (s < 10 ? '0' : '') + s;
  };
  var hours = Math.floor(seconds/ (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  
  return pad(hours) + ':' + pad(minutes) + ":" + pad(seconds);
}

client.on("message", (msg) => {

  if (msg.messageText === "^ping"){
    client.say(CHANNEL_NAME,"Pong! FeelsDankMan 🏓 Uptime: " + timeformat(process.uptime()))
  }
}) */    
