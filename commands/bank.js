const Discord = require("discord.js");

const EmbedBank = new Discord.MessageEmbed()
  .setTitle("Bank")
  .setDescription(
    "にこにこぷんBank : [[ **Here** ](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)]\n隠れ家Bank : [[ **Here** ](https://docs.google.com/spreadsheets/d/1P3KEhEvXbXh7e65ak9ISYynuNI4YgrNTeg7boV_LrBg/edit?usp=sharing)]"
  )
  .setColor(1752220);

const EmbedBank2 = new Discord.MessageEmbed()
  .addField("にこにこぷんBank :","[[ **Here** ](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)]")
  .addField("すごろくツアーズ :","[[ **ルール** ](https://docs.google.com/document/d/1vwjvLG1LE1dX4StsFqh6tm0820-sDENHMj_-62-XHKc/edit?usp=sharing)]　[[ **フィールド** ](https://docs.google.com/spreadsheets/d/1XguQP5eG6tKRgjEsYSwZU-ndn-eoi0vYXsVZxBTe08Y/edit#usp=sharing)]")
  .setColor(1752220);


exports.run = (client, message, args) => {
  message.channel.send(EmbedBank2);
  return;
};
