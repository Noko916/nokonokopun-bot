const math = require('math.js');
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
    .setColor(0xffffff)
    .setTitle("Calc")
    .addField("式", `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField("計算結果", `\`\`\`js\n${resp}\`\`\``)

    message.channel.send(embed);
}