const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");

module.exports = {
    name: "remind",
    description: "指定の時間にメンションを飛ばします\n\`.remind <time> <reason>\`",
    aliases: ["timer", "rem"],

    async execute(client, message, args) {

        let remindtime = args[0];
        let reason = args.slice(1).join(" ");

        let reptime = remindtime;

        reptime.replace("d", "日 ");
        reptime.replace("h", "時間 ");
        reptime.replace("m", "分 ");
        reptime.replace("s", "秒");

        if (!remindtime) return message.reply(":x: 時間を入力してください `例: .remind 10s aiueo`");
        if (!reason) return message.reply(":x: 内容を入力してください `例: .remind 10s aiueo`");

        db.set(`remind.${message.author.id}`, Date.now() + ms(remindtime))

        message.channel.send("OK! `" + reptime + "` 後に `" + reason + "` をお知らせします");

        const interval = setInterval(function () {

            if (Date.now() > db.fetch(`remind.${message.author.id}`)) {
                db.delete(`remind.${message.author.id}`);
                message.channel.send(`**Remind: **[${message.author}]\n> ${reason}`)
                    .catch(e => console.log(e));
                clearInterval(interval);
            }

        }, 1000);

        return;
    },
};