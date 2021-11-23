const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

const Embedblog = new MessageEmbed()
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
  aliases: ["burogu"],

  async execute(client, message, args) {

    if(message.content == ".burogu") message.channel.send(`もしかして... \`.blog\`?`);

    message.channel.send({ embeds: [Embedblog]});
    return;
  }
};
