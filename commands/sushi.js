const Discord = require("discord.js");

module.exports = {
    name: "sushi",
    description: "寿司食べたい",
    aliases: ["sus", "🍣"],

    async execute(client, message, args) {

        message.channel.send("<:sushi:703860479319212103> https://www.youtube.com/watch?v=epfPe2U_2Xk <:sushi:703860479319212103>");
        return;
    },
};
