const Discord = require("discord.js");

const EmbedHelp = new Discord.MessageEmbed()
  .setTitle("コマンド一覧")
  .addField(".ataoka", "そもそも...")
  .addField(".bank", "にこぷん・隠れ家のバンクへのリンク")
  .addField(".bga", "BoardGameArenaのリンク")
  .addField(".blog", "にこぷん運営のブログへのリンク")
  .addField(".brainpower", "O-oooooooooooooooo")
  .addField(".comyu", "各コミュリンク")
  .addField(".dekita", "ﾊﾟﾊﾟﾗｯﾊﾟｯﾊﾟ")
  .addField(
    ".dice [?]d[??]",
    "[?]d[??] のダイスを振るよ\n個数: 20個まで　ダイス: 1000まで"
  )
  .addField(".parrot / .fastparrot / .ultrafastparrot", "例のトリ")
  .addField(".hage", "(´･ω･`)")
  .addField(".hasu", "ハースくんから一言")
  .addField(".help", "これを表示するコマンド")
  .addField(".iisen", "いい線いきましょう + クイズヨットが答え のリンク")
  .addField(".ito", "イトーさんから一言")
  .addField(".manual", "爆弾解除ゲームのマニュアル")
  .addField(".mrigu", "茶の間Ｍリーグのリンク")
  .addField(".pick [?? ?? ??]", "どれか１つを抽出します")
  .addField(".repeat [?????]", "[?????]と同じ発言をします")
  .addField(".sugoroku", "すごろくツアーズへのリンク")
  .addField(".sushi", "寿司")
  .addField(".thinking", ":thinking: のスタンプをリアクションします")
  .addField(".trueblue", "君が代")
  .addField(".yotei", "予定表のリンク")
  .addField(".yoto", "ヨットさんいつもの！")
  .addField(".yotoo", "ヨットさん？")

  .setColor(1752220)
  .setFooter("多すぎる", "");

exports.run = (client, message, args) => {
  message.channel.send(EmbedHelp);
  return;
};
