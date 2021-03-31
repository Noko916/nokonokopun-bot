const Discord = require("discord.js");

module.exports = {
  name: "fastparrot",
  description: "ちょっと速い𝓹𝓪𝓻𝓻𝓸𝓽を貼ります",
  aliases: ["fparrot", "fastp"],

  async execute(client, message, args) {
    message.channel.send("<a:fastparrot:716015527688142919>");
    return;
  },
};
