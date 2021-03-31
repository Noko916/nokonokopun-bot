const Discord = require("discord.js");

module.exports = {
    name: "easing",
    description: "aviutl のイージング表を貼ります",
    aliases: ["aviutl"],

    async execute(client, message, args) {
        message.channel.send("https://aketama.work/wp-content/uploads/2018/09/easing-1.png");

        return;
    },
}