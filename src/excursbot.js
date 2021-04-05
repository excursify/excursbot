import {BOT_USERNAME, CHANNEL_NAME, O_AUTH} from './login'
const tmi = require("tmi.js");
const { ChatClient } = require("dank-twitch-irc");

let client = new ChatClient(
  {
    username: BOT_USERNAME,
    password: O_AUTH
  }
)

client.on("connecting", () => client.say(CHANNEL_NAME,"Trying to join PauseChamp"))
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
client.join(CHANNEL_NAME);

// Random Funcion
function joinedlole(){
  console.log("Successfully connected to chat");
  client.say(CHANNEL_NAME, "Success PagMan 🤘 ");
}


// Colors
client.setColor({r: 95, g: 158, b: 160});
// Ping Command
/*client.on("message", (msg) => {
  if (msg.messageText === "^ping"){
    client.say(CHANNEL_NAME, "Pong! 🏓" )
  }
}) */

client.on("message", (msg) => {
  if (msg.messageText === "^hello"){
    client.say(CHANNEL_NAME," 👋 Okayge " + msg.displayName)
  }
})

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
})   
