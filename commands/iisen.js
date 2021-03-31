const Discord = require("discord.js");
module.exports = {
    name: "iisen",
    description: "いい線行きましょう+クイズヨットが答え！のシートを貼ります",
    aliases: ["iisenn", "quizyotto", "yottogakotae", "s9sheet"],

    async execute(client, message, args) {
        message.channel.send("https://docs.google.com/spreadsheets/d/1wZJwhr-hP07b8nHUXc0cD8WjhaXCycwX5spM4myHr5k/edit#gid=2019535351/");
        return;
    },
};