// Response for Uptime Robot
const http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Discord bot は 動いています\n");
  })
  .listen(3000);

// Discord bot implements
const Discord = require("discord.js");
const client = new Discord.Client();
const Eris = require("eris");
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);

var args = 0;
var command = 0;

const prefix = ".";

client.on("ready", message => {
  client.user.setActivity("Civ Ⅹ", { type: "PLAYING" });
  console.log("入っているサーバー:");
  var ServerList = client.guilds.cache.map(a => a.name).join(" / ");
  console.log("[ " + ServerList + " ]");
  console.log("Ready!");
});

client.on("message", async message => {
  const re = new RegExp(
    "https://discordapp.com/channels/([0-9]{18})/([0-9]{18})/([0-9]{18})"
  );
  const results = message.content.match(re);
  if (!results) {
    return;
  }
  console.log(`${message.author.tag} to cite [${message.content}]`);
  const guild_id = results[1];
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

  if (message.content.includes("ころす")||
      message.content.includes("殺す")||
      message.content.includes("しね")||
      message.content.includes("死ね")){
  message.channel.send("ぴぴー！暴言警察だ！");
  return;
  }
  
  if (message.mentions.has(client.user)) {
    message.reply(
      "呼びましたか？\n問題が発生した時は、<@221360357191581697> に連絡してください。"
    );
    return;
  }

  //ここから

  if (!message.content.startsWith(prefix)) return; //prefixがついてないコマンドを無視

  let msg = message.content.toUpperCase();
  let sender = message.author;

  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(` `);
  let cmd = args.shift().toLowerCase();

  const cmdrand = Math.floor(Math.random() * 100) + 1; //乱数生成 1~100

  //コマンド拒否
  if (cmdrand <= 49 && message.author.id === "284375687714963456") {
    message.channel.send("いやです！:smirk:");
    return;
  } else if (cmdrand <= 1) {
    message.channel.send("いやです:smirk:");
    return;
  } else {
    // commands/xxx.js の読み込み
    try {
      delete require.cache[require.resolve(`./commands/${cmd}.js`)]; //キャッシュ消去
      let commandFile = require(`./commands/${cmd}.js`);
      commandFile.run(client, message, args); // xxx.jsに client, message, argsの設定を引き継いで実行

      //エラー処理
    } catch (e) {
      console.log(e.stack);
      message.channel.send("ぶー");

      //確認処理 (console.log で書き出し)
    } finally {
      console.log(`${message.author.tag} ran the command ${cmd}`);
      return;
    }
  }
  
  //ここまで
});

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("please set ENV: DISCORD_BOT_TOKEN");
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);
