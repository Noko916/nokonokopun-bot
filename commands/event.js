const Discord = require("discord.js");

const { Period, EvTitle, DocLink, SheLink, EvAliases } = require('../config.json')

/* --- */

const Embedblog = new Discord.MessageEmbed()
  .setTitle(`${Period} 「${EvTitle}」`)
  .setDescription(
    `[[詳細](${DocLink})]　[[シート](${SheLink})]`
  )
  .setColor(1752220);

module.exports = {
    name: "event",
    description: "現在進行中のイベント詳細",
    aliases: ["event", `${EvAliases}`],

    async execute(client, message, args) {
        message.channel.send("https://aketama.work/wp-content/uploads/2018/09/easing-1.png");

        return;
    },
}