/*
const Discord = require("discord.js");

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

module.exports = {
  name: "help",
  description: "コマンドの使い方を表示します",
  aliases: ["halp", "welp", "walp", "command", "commands", "cmd"],

  async execute(Discord, client, message, args){
    const data = [];
    const { commands } = message.client;

    if (!args.length) {
        data.push("使えるコマンドはこちら");
        data.push(`${prefix}` + commands.map(c => c.name).join(`\n${prefix}`));
        data.push(`\n\`${prefix}help [command name]\` で詳細を表示します`)
        message.channel.send(data);

        return;
    }

    const name = args[0];
    const cmd = commands.get(name)
        || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!cmd) {
      message.reply(`${name} なんてコマンドはないよ！`)

        return;
    }

    data.push(`Name: ${cmd.name}`);
    if (cmd.description) data.push(`Description: ${cmd.description}`);
    if (cmd.aliases) data.push(`Aliases: ${cmd.aliases.join(', ')}`);

    message.channel.send(data);
  }
}