const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

const EmbedBank = new MessageEmbed()
  .setTitle("Bank")
  .setDescription(
    `にこにこぷんBank : [[ **Here** ](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)]`
  )
  .setColor(1752220);

module.exports = {
  name: "bank",
  description: "にこぷんのバンク",
  aliases: ["banku", "bannku"],

  async execute(client, message, args) {
    message.channel.send( {embeds : [EmbedBank]});
    return;
  }
};