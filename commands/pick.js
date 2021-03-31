const Discord = require("discord.js");
module.exports = {
  name: "pick",
  description: "複数の文字列の中から1個を抽出します",

  async execute(client, message, args) {
    var array = args;

    //console.log(args);
    console.log(array);

    message.channel.send(array[Math.floor(Math.random() * array.length)]);
    return;
  },
};
