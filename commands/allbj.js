const Discord = require("discord.js");

module.exports = {
    name: "allbj",
    description: "オールインBJダービーの集計シートを表示します",
    aliases: ["all", "allinbj", "bjderby"],

    async execute(client, message, args) {
        message.channel.send("https://docs.google.com/spreadsheets/d/1y4IGpYxbF2AbG48UW04DBPg_CHiPhxjGU-2TBS27MpI/edit#gid=1101344474");
    },
}