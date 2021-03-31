const Discord = require("discord.js");

module.exports = {
    name: "白日",
    description: "白日を貼ります 不定期でコマンドが変わります",
  
    async execute(client, message, args) {
  
    message.channel.send("正解!\nhttps://www.youtube.com/watch?v=ony539T074w");
    return;
    },
};
