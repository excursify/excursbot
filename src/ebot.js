const login = require('./login');
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

client.on()

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
module.exports = client;
