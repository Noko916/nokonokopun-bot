const Discord = require("discord.js");

module.exports = {
    name: "bga",
    description: "BGAのリンクを貼るだけ",

    async execute(client, message, args) {

        message.channel.send("BGA: \nhttps://ja.boardgamearena.com/");
        return;
    }
};
