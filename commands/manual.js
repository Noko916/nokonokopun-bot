const Discord = require("discord.js");
module.exports = {
  name: "manual",
  description: "爆弾解除ゲーム(Keep Talking and Nobody Explodes) のマニュアルを貼ります",
  aliases: ["bakudan", "kaijo"],

  async execute(client, message, args) {

    message.channel.send("http://www.bombmanual.com/ja/web/index.html");

    return;
  },
};
