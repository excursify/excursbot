import {BOT_USERNAME, CHANNEL_NAME, O_AUTH} from './login'


const { ChatClient } = require("dank-twitch-irc");

let client = new ChatClient(
  {
    username: BOT_USERNAME,
    password: O_AUTH
  }
)

client.on("ready", () => joinedlole());
client.on("close", (error) => {
  if (error != null) {
    console.error("Client closed due to error", error);
  }
});

client.on("PRIVMSG", (msg) => {
  console.log(`[#${msg.channelName}] ${msg.displayName}: ${msg.messageText}`);
});

client.connect();
client.join(CHANNEL_NAME);


function joinedlole(){
  console.log("Successfully connected to chat");
  client.say(CHANNEL_NAME, "I joined PagMan");
}

