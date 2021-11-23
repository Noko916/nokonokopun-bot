const { MessageEmbed } = require('discord.js');

const EmbedMrigu = new MessageEmbed()
  .setTitle("茶の間的Ｍリーグ")
  .setDescription(
    "ルール説明 : [[ **Documents** ](https://docs.google.com/document/d/107ueMkvNEKYKXFZuLIWI6cf2B1eTYZOM8JFtQGy9nyQ/edit)]\n点数表 : [[ **SpreadSheets** ](https://docs.google.com/spreadsheets/d/1huyjPTatYJvhMzPFx3SRWjZQk7WHyNy5wotztUq6pfo/edit?usp=sharing)]"
  )
  .setColor(1752220);

module.exports = {
  name: "mrigu",
  description: "茶の間Mリーグの集計シートを貼ります",
  aliases: ["m", "mreague"],

  async execute(client, message, args) {
    message.channel.send({ embeds: [EmbedMrigu] });
    return;
  },
};
