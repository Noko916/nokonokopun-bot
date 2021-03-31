const Discord = require("discord.js");
module.exports = {
  name: "parrot",
  description: "𝓹𝓪𝓻𝓻𝓸𝓽を貼ります",
  aliases: ["p", "p1"],

  async execute(client, message, args) {
    message.channel.send("<a:gaming_parrot:716015460075962491>");
    return;
  },
};