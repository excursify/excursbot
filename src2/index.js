require('dotenv').config();
const Discord = require('discord.js'); 
const client = new Discord.Client();


client.login(process.env.DISCORD_TOKEN);
client.on('ready', () => {   
    console.log('The bot is ready'); 
});


client.on('message', msg => {
    if(msg.content === 'ping'){
        msg.channel.send('pong');
    }
})


const prefix = `!`;
client.on("message", msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  // get channel id and command out of message
  const channelId = msg.channel.id;
  const commandBody = msg.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();
  if (command === 'play') {

    // after successfully create the play space, response to the user that call this command.
    msg.reply('No');
  }
});


