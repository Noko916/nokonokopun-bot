const Discord = require("discord.js");

const EmbedHelp = new Discord.MessageEmbed()
  .setTitle("コマンド一覧")
  .addField(".bank", "にこぷん・隠れ家のバンクへのリンク")
  .addField(".bga", "BoardGameArenaのリンク")
  .addField(".blog", "にこぷん運営のブログへのリンク")
  .addField(".comyu", "各コミュリンク")
  .addField(
    ".dice [?]d[??]",
    "[?]d[??] のダイスを振るよ\n個数: 20個まで　ダイス: 1000まで"
  )
  .addField(".parrot / .fastparrot / .ultrafastparrot", "例のトリ")
  .addField(".iisen", "いい線いきましょう + クイズヨットが答え のリンク")
  .addField(".manual", "爆弾解除ゲームのマニュアル")
  .addField(".mrigu", "茶の間Ｍリーグのリンク")
  .addField(".pick [?? ?? ??]", "どれか１つを抽出します")
  .addField(".repeat [?????]", "[?????]と同じ発言をします")
  .addField(".sugoroku", "すごろくツアーズへのリンク")
  .addField(".thinking", ":thinking: のスタンプをリアクションします")
  .addField(".yotei", "予定表のリンク")

  .setColor(1752220)
  .setFooter("これ以外にもあるよ！", "");

exports.run = (client, message, args) => {
  message.channel.send(EmbedHelp);
  return;
};
