const Discord = require("discord.js");

const Embedblog = new Discord.MessageEmbed()
  .setTitle("Blog")
  .setDescription(
    `harthのブログ [[ **Link** ](https://niconoco.wixsite.com/polori/blog/categories/harth)]\n
    Nokoのブログ [[ **Link** ](https://niconoco.wixsite.com/polori/blog/categories/nokonoko)]\n
    *´･ω･\`)ﾉのブログ [[ **Link** ](https://niconoco.wixsite.com/polori/blog/categories/ω-ﾉ)]`
  )
  .setColor(1752220);

module.exports = {
  name: "blog",
  description: "運営チームのブログを紹介します",

  async execute(client, message, args) {
    message.channel.send(Embedblog);
    return;
  }
};
