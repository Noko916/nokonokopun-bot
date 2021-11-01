const Discord = require("discord.js");

const EmbedBank = new Discord.MessageEmbed()
  .setTitle("Bank")
  .setDescription(
    `にこにこぷんBank : [[ **Here** ](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)]`
  )
  .setColor(1752220);

const EmbedBank2 = new Discord.MessageEmbed()
  .addField("にこにこぷんBank :", "[[ **Here** ](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)]")
  .addField(`シーズン企画「アトリエ」 :`, `[[ **ルール** ](https://docs.google.com/document/d/1lXMIvFi7IxdYBtovydpRQteRk36LiJ9Bpjpva1am4yk/edit)]` +
    `　[[ **企画シート** ](https://docs.google.com/spreadsheets/d/1s2QfczDzd0bpGneXdl3wmcfbyfjDS4GbjTBKshSnwF8/edit#gid=0)]`)
  .setColor(1752220);

module.exports = {
  name: "bank",
  description: "にこぷんのバンク",
  aliases: ["banku", "bannku"],

  async execute(client, message, args) {
    message.channel.send(EmbedBank);
    return;
  }
};
