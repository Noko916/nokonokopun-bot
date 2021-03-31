/*
const EmbedHelp = new Discord.MessageEmbed()
  .setTitle("コマンド一覧")
  .addField(".bank", "にこぷん・隠れ家のバンクへのリンク")
  .addField(".bga", "BoardGameArenaのリンク")
  .addField(".blog", "にこぷん運営のブログへのリンク")
  .addField(".calc [???]", "計算をします")
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
*/

const { prefix } = require('../config.json');
const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "コマンドの使い方を表示します",
  aliases: ["halp", "welp", "walp", "command", "commands", "cmd", "herupu"],

  async execute(client, message, args) {
    const EmbedHelp = new Discord.MessageEmbed().setColor(1752220);
    const { commands } = message.client;

    if (!args.length) {

      EmbedHelp
        .setTitle("使えるコマンドはこちら")

        .setDescription(`${prefix}` + commands.map(c => c.name).join(`\n${prefix}`))
        .setFooter(`${prefix}help [command name]   で詳細を表示します`);
      message.channel.send(EmbedHelp);

      return;
    }

    const name = args[0];
    const cmd = commands.get(name)
      || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!cmd) {
      message.reply(`${name} なんてコマンドはないよ！`)

      return;
    }

    EmbedHelp.setTitle(`${prefix}${cmd.name}`);
    if (cmd.description) EmbedHelp.addField(`Description`, cmd.description);
    if (cmd.aliases)     EmbedHelp.addField(`Aliases`,     cmd.aliases.join(', '));

    message.channel.send(EmbedHelp);
  }
}