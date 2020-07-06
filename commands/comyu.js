const Discord = require("discord.js");

  const EmbedCommunity = new Discord.MessageEmbed()
    .setTitle("コミュ一覧")
    .addField(
      "Argine",
      "[本店](https://com.nicovideo.jp/community/co1589273)　　　[別荘](https://com.nicovideo.jp/community/co2062388)　　　[豪邸](https://com.nicovideo.jp/community/co2062390)\n[空き地](https://com.nicovideo.jp/community/co2461966)　　[無人島](https://com.nicovideo.jp/community/co4725470)　　[土手](https://com.nicovideo.jp/community/co4733277)"
    )
      .addField(
      "にこにこぷん",
      "[一号店](https://com.nicovideo.jp/community/co1354820)　[二号店](https://com.nicovideo.jp/community/co2645213)　[三号店](https://com.nicovideo.jp/community/co3540952)"
    )
    .addField(
      "隠れ家",
      "[メイン](https://com.nicovideo.jp/community/co1446560)　[サブ](https://com.nicovideo.jp/community/co2506134)"
    )
    //トーナメント開催時OPEN
    .addField("ニコ生カジノトーナメント","[総合運営本部](https://com.nicovideo.jp/community/co4145215)")
    .setColor(1752220);
  
exports.run = (client, message, args) => {
  
    message.channel.send(EmbedCommunity);
    return;
  
};
