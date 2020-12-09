const Discord = require("discord.js");

const EmbedBank = new Discord.MessageEmbed()
  .setTitle("Bank")
  .setDescription(
    "にこにこぷんBank : [[ **Here** ](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)]\n隠れ家Bank : [[ **Here** ](https://docs.google.com/spreadsheets/d/1P3KEhEvXbXh7e65ak9ISYynuNI4YgrNTeg7boV_LrBg/edit?usp=sharing)]"
  )
  .setColor(1752220);

const EmbedBank2 = new Discord.MessageEmbed()
  .addField("にこにこぷんBank :","[[ **Here** ](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)]")
  .addField("サバイバルシューター :","[[ **ルール** ](https://docs.google.com/document/d/1AYtP4O6dTp1NJsKqBVGuNmzHWTqveZzi_66Pl2TnQRY/edit)]　[[ **関連シート** ](https://docs.google.com/spreadsheets/d/1DsgZ3rb2b3XhdAjx7z9lavOoZZ3EFAQmKgXZG3VMGSU/edit#gid=364382638)]")
  .setColor(1752220);


exports.run = (client, message, args) => {
  message.channel.send(EmbedBank2);
  return;
};
