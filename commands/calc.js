const math = require('mathjs');
const Discord = require('discord.js');

exports.run = (_client, message, args, _tools) => {

    if (!args[0]) return message.channel.send("計算式を入力してください")

    let resp;
    
    //処理
    try{
        resp = math.evaluate(args.join(' '));
    } catch (e) {
        console.log(e);
        return message.channel.send("有効な計算式を入力してください");
    }

    //Finally
    const embed = new Discord.MessageEmbed()
    .setColor(1752220)
    .setTitle("Calc")
    .addField("Input", `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField("Output", `\`\`\`js\n${resp}\`\`\``);

    message.channel.send(embed);
}