const Discord = require("discord.js");
module.exports = {
  name: "yotoo",
  description: "Yotoo!",

  async execute(client, message, args) {
    message.channel.send("Yahoo!");
    return;
  },
};
