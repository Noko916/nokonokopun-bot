const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let user = client.users.cache.get('258917758614372352')
   user.send('https://cdn.discordapp.com/attachments/257081353663676421/723581599848988762/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f445f777739574f55454145545a47332e6a7067.png')
  return;
};
