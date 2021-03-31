const Discord = require("discord.js");

module.exports = {
  name: "thinking",
  description: "thinkingを付けます",
  aliases: ["think"],

  async execute(client, message, args) {

    message.react('🤔')
      .catch(console.error);
    return;
  },
};
