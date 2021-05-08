require('dotenv').config();
// const login = require('./login');
const { ChatClient } = require("dank-twitch-irc");
const client = new ChatClient(
  {
    username: process.env.BOT_USERNAME,
    password: process.env.O_AUTH
  }
);

client.on("connecting", () => client.say(process.env.CHANNEL_NAME,"Trying to join PauseChamp"));
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
client.join(process.env.CHANNEL_NAME);

// Random Funcion
function joinedlole(){
  console.log("Successfully connected to chat");
  client.say(process.env.CHANNEL_NAME, "Success PagMan 🤘 PAGUEROOOO!!! ");
}

// Colors
client.setColor({r: 95, g: 158, b: 160});
module.exports = client;