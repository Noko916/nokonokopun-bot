const { MessageEmbed } = require('discord.js');

const { Period, EvTitle, DocLink, SheLink, EvAliases } = require('../config.json')

/* --- */

const EmbedEvent = new MessageEmbed()
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
        message.channel.send({ embeds : [EmbedEvent] });

        return;
    },
}