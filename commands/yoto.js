const Discord = require("discord.js");
module.exports = {
  name: "yoto",
  description: "yoto",

  async execute(client, message, args) {
    message.channel.send("ブーーーン");
    return;
  },
};
