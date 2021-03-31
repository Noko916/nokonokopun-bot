const math = require('mathjs');
const Discord = require('discord.js');

module.exports = {
    name: "calc",
    description: "計算して結果を表示します 長さ,重さ等も計算できます",
    aliases: ["dentaku", "keisan", "calculator", "calculation"],

    async execute(_client, message, args, _tools) {

        if (!args[0]) return message.channel.send("計算式を入力してください")

        let resp;

        //処理
        try {
            resp = math.evaluate(args.join(' '));
        } catch (e) {
            console.log(e);
            return message.channel.send("有効な計算式を入力してください");
        }

        //Finally
        const embed = new Discord.MessageEmbed()
            .setColor(1752220)
            .setTitle("Calc")
            .addField("計算式", `\`\`\`js\n${args.join(' ')}\`\`\``)
            .addField("結果", `\`\`\`js\n${resp}\`\`\``);

        message.channel.send(embed);

        console.log(`${args.join(' ')} = ${resp}`);
    },
}