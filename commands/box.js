const Discord = require("discord.js");

const EmbedBoxPrize = new Discord.MessageEmbed()
  .setTitle("にこぷん箱開け報酬")
	.addFields(
		{ name: "Bronze", value: "Deal: 5P\n-\n-\n-\n-\n-\n5P\n10P\n15P\n20P\n25P\n30P\n抽選数字+2\n青着席権(Lv.15)", inline: true },
		{ name: "Silver", value: "Deal: 20P\n5P\n5P\n5P\n10P\n10P\n15P\n30P\n50P\n100P\n抽選数字+2\n青着席権(Lv.15)\n青着席権(Lv.20)\n青着席権(Lv.∞)", inline: true },
    { name: "Silver", value: "Deal: 20P\n5P\n5P\n5P\n10P\n10P\n15P\n30P\n50P\n100P\n抽選数字+2\n青着席権(Lv.15)\n青着席権(Lv.20)\n青着席権(Lv.∞)", inline: true },
	)
  .setColor(1752220);

exports.run = (client, message, args) => {
  message.channel.send(EmbedBoxPrize);
  return;
};
