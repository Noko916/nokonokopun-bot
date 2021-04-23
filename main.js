// Discord bot implements
const Discord     = require("discord.js");
const fs          = require('fs');
const { prefix }  = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

let h_per = 25;
let o_per = 1;


let version = 111;


const cmds = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));

for (const file of cmds) {
  const cmd = require(`./commands/${file}`);

  client.commands.set(cmd.name, cmd);
}

client.on("message", async message => {
  const re = new RegExp(
    "https://discordapp.com/channels/([0-9]{18})/([0-9]{18})/([0-9]{18})"
  );
  const results = message.content.match(re);
  if (!results) {
    return;
  }
  console.log(`${message.author.tag} to cite [${message.content}]`);
  const channel_id = results[2];
  const message_id = results[3];

  const channel = client.channels.cache.get(channel_id);
  if (!channel) {
    return;
  }

  channel.messages
    .fetch(message_id)
    .then(message =>
      message.channel.send({
        embed: {
          author: {
            name: message.member.displayName,
            icon_url: message.member.user.displayAvatarURL()
          },
          image: {
            url: message.attachments.map(attachment => attachment.url)[0]
          },
          description: message.content,
          footer: {
            text: `${message.guild.name} #${message.channel.name}`,
            icon_url: message.guild.iconURL()
          },
          timestamp: message.createdTimestamp
        }
      })
    )
    .catch(console.error);
});

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content.includes("everyone")) return;

  if (message.mentions.has(client.user)) {
    message.reply(
      "呼びましたか？\n問題が発生した時は、<@221360357191581697> に連絡してください。"
    );
    return;
  }

  //ここから

  if (!message.content.startsWith(prefix)) return; //prefixがついてないコマンドを無視


  /*
  if (!message.author.id === "221360357191581697") {
    message.channel.send("メンテ中です");
    return;
  }
  */

  let msg = message.content.toUpperCase();
  let sender = message.author;

  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(` `);

  const cmdName = args.shift().toLowerCase();

  //const cmd = args.shift().toLowerCase();
  const cmd = client.commands.get(cmdName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

  if (!cmd) {
    console.log(`${message.author.tag} ran the command ${prefix}${cmdName}`);
    return message.channel.send(`ぶー`)
  }
  const cmdrand = Math.floor(Math.random() * 100) + 1; //乱数生成 1~100

  //コマンド拒否
 if (cmdrand <= h_per && message.author.id === "284375687714963456" && !message.content.includes("per")) {
    message.channel.send(`いやです！:smirk:　\`拒否率: ${h_per}%\``);
    return;
  } else if (cmdrand <= o_per && message.author.id != "284375687714963456" && !message.content.includes("per")) {
    message.channel.send(`いやです:smirk:　\`拒否率: ${o_per}%\``);
    return;
  } else {
    // commands/xxx.js の読み込み
    try {
      //delete require.cache[require.resolve(`./commands/${cmd}.js`)]; //キャッシュ消去
      console.log(`${message.author.tag} ran the command ${prefix}${cmdName}`);
      cmd.execute(client, message, args);

      //エラー処理
    } catch (e) {
      message.channel.send("エラー: <@221360357191581697> ログ見て！！！")
      console.log(e);

      //確認処理 (console.log で書き出し)
    } finally {
      //console.log(`${message.author.tag} ran the command ${cmd}`);
    }
  }

  return;
  //ここまで
});

client.on("ready", () => {
  client.user.setActivity(`Civ ${version}`, { type: "PLAYING" });
  console.log("入っているサーバー:");
  var ServerList = client.guilds.cache.map(a => a.name).join(" / ");
  console.log("[ " + ServerList + " ]");
  console.log("Ready!");
});

client.login(process.env.DISCORD_BOT_TOKEN);
