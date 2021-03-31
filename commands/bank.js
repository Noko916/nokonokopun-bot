const Discord = require("discord.js");

const EmbedBank = new Discord.MessageEmbed()
  .setTitle("Bank")
  .setDescription(
    `にこにこぷんBank : [[ **Here** ](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)]` +
    `\n隠れ家Bank : [[ **Here** ](https://docs.google.com/spreadsheets/d/1P3KEhEvXbXh7e65ak9ISYynuNI4YgrNTeg7boV_LrBg/edit?usp=sharing)]`
  )
  .setColor(1752220);

const EmbedBank2 = new Discord.MessageEmbed()
  .addField("にこにこぷんBank :", "[[ **Here** ](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)]")
  .addField(`シーズン企画「アトリエ」 :`, `[[ **ルール** ](https://docs.google.com/document/d/1lXMIvFi7IxdYBtovydpRQteRk36LiJ9Bpjpva1am4yk/edit)]` +
    `　[[ **企画シート** ](https://docs.google.com/spreadsheets/d/1s2QfczDzd0bpGneXdl3wmcfbyfjDS4GbjTBKshSnwF8/edit#gid=0)]`)
  .setColor(1752220);

module.exports = {
  name: "bank",
  description: "にこぷんのバンクと今やってる企画の詳細を表示します",
  aliases: ["banku", "bannku"],

  async execute(client, message, args) {
    message.channel.send(EmbedBank2);
    return;
  }
};
