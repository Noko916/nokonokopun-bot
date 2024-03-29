const Discord = require("discord.js");
const fs = require('fs');
const { Intents, Client, MessageEmbed } = require("discord.js");
const { prefix, h_per, o_per, version } = require('./config.json');

const options = {
  intents: ["GUILDS", "GUILD_MESSAGES"],
}

const client = new Discord.Client(options);
client.commands = new Discord.Collection();

const cmds = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));

for (const file of cmds) {
  const cmd = require(`./commands/${file}`);

  client.commands.set(cmd.name, cmd);
}

// ----------------------------------------------------------------------------------------------------

client.on("messageCreate", message => {
  if (message.author.bot) return;

  if (message.content.includes("everyone")) return;

  /*
  if (message.mentions.has(client.user)) {
    message.reply(
      "呼びましたか？\n問題が発生した時は、<@221360357191581697> に連絡してください。"
    );
    return;
  }
  */

  if (!message.content.startsWith(prefix)) return; //prefixがついてないコマンドを無視

  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(` `);

  const cmdName = args.shift().toLowerCase();

  const cmd = client.commands.get(cmdName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

  if (!cmd) {
    console.log(`${message.author.tag} ran the command ${prefix}${cmdName}`);
    return;
  }
  const cmdrand = Math.floor(Math.random() * 100) + 1; //乱数生成 1~100

  // コマンド拒否
  if (cmdrand <= h_per && message.author.id === "284375687714963456" && !message.content.includes("per")) {
    message.channel.send(`いやです！:smirk:　\`拒否率: ${h_per}%\``);
    return;

  } else if (cmdrand <= o_per && message.author.id != "284375687714963456" && !message.content.includes("per")) {
    message.channel.send(`いやです:smirk:　\`拒否率: ${o_per}%\``);
    return;

  } else {
    // commands/xxx.js の読み込み
    try {
      console.log(`${message.author.tag} ran the command ${prefix}${cmdName}`);
      cmd.execute(client, message, args);

      // エラー処理
    } catch (e) {
      message.channel.send("エラー: <@221360357191581697> ログ見て！！！")
      console.log(e);
    }
  }

  return;
});


// ----------------------------------------------------------------------------------------------------


client.on("ready", () => {

  // cmds.forEach(c => {
  //   console.log(`${c} loaded`)
  // })

  client.user.setActivity(`Ver.${version}`, { type: "PLAYING" });
  console.log("入っているサーバー:");
  var ServerList = client.guilds.cache.map(a => a.name).join(" / ");
  console.log("[ " + ServerList + " ]");
  console.log("Ready!");
});


// ----------------------------------------------------------------------------------------------------


client.login(process.env.DISCORD_BOT_TOKEN);