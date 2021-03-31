const Discord = require("discord.js");

module.exports = {
  name: "ultrafastparrot",
  description: "とても速い𝓹𝓪𝓻𝓻𝓸𝓽を貼ります",
  aliases: ["ultraparrot", "ultrap", "p3", "ufp"],

  async execute(client, message, args) {
    message.channel.send("<a:ultrafastparrot:716015589940002846>");
    return;
  },
};
