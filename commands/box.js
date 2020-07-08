const Discord = require("discord.js");

const EmbedBoxB = new Discord.MessageEmbed()
  .setTitle("箱開け報酬 ブロンズ")
  .addFields(
    {
      name: ".",
      value:
        "Deal: \n　２: \n　３: \n　４: \n　５: \n　６: \n　７: \n　８: \n　９: \n　Ｔ: \n　Ｊ: \n　Ｑ: \n　Ｋ: \n　Ａ:",
      inline: true
    },
    {
      name: "Bronze",
      value:
        "5P\n-\n-\n-\n-\n-\n5P\n10P\n15P\n20P\n25P\n30P\n抽選数字+2\n青着席権(Lv.15)",
      inline: true
    }
  )
  .setColor(1752220);

const EmbedBoxS = new Discord.MessageEmbed()
  .setTitle("箱開け報酬　シルバー")
  .addFields(
    {
      name: ".",
      value:
        "Deal: \n　２: \n　３: \n　４: \n　５: \n　６: \n　７: \n　８: \n　９: \n　Ｔ: \n　Ｊ: \n　Ｑ: \n　Ｋ: \n　Ａ:",
      inline: true
    },
    {
      name: "Silver",
      value:
        "20P\n5P\n5P\n5P\n10P\n10P\n15P\n30P\n50P\n100P\n抽選数字＋２\n着席権（Lv.15）\n着席権（Lv.20）\n着席権（Lv.∞）",
      inline: true
    }
  )
  .setColor(1752220);

const EmbedBoxG = new Discord.MessageEmbed()
  .setTitle("箱開け報酬　ゴールド")
  .addFields(
    {
      name: ".",
      value:
        "Deal: \n　２: \n　３: \n　４: \n　５: \n　６: \n　７: \n　８: \n　９: \n　Ｔ: \n　Ｊ: \n　Ｑ: \n　Ｋ: \n　Ａ:",
      inline: true
    },
    {
      name: "Gold",
      value:
        "100P\n30P\n30P\n30P\n50P\n100P\n200P\n300P\n着席権（Lv.20）\n着席権（Lv.∞）\n着席権（Lv.∞）＋50P\n着席権\n着席権＋50P\nVIP着席権×1 or 10PP",
      inline: true
    }
  )
  .setColor(1752220);

const EmbedBoxGp = new Discord.MessageEmbed()
  .setTitle("箱開け報酬　ゴールド +")
  .addFields(
    {
      name: ".",
      value:
        "Deal: \n　２: \n　３: \n　４: \n　５: \n　６: \n　７: \n　８: \n　９: \n　Ｔ: \n　Ｊ: \n　Ｑ: \n　Ｋ: \n　Ａ:",
      inline: true
    },
    {
      name: "Gold+",
      value:
        "200P\n30P\n30P\n50P\n100P\n200P\n300P\n着席権（Lv.20）\n着席権（Lv.∞）\n着席権（Lv.∞）＋50P\n着席権\n着席権＋50P\nVIP着席権×1 or 10PP\nVIP着席権×2 or 20PP",
      inline: true
    }
  )
  .setColor(1752220);

const EmbedBoxP = new Discord.MessageEmbed()
  .setTitle("箱開け報酬　プラチナ")
  .addFields(
    {
      name: ".",
      value:
        "Deal: \n　２: \n　３: \n　４: \n　５: \n　６: \n　７: \n　８: \n　９: \n　Ｔ: \n　Ｊ: \n　Ｑ: \n　Ｋ: \n　Ａ:",
      inline: true
    },
    {
      name: "Platinum",
      value:
        "1000P\n200P\n300P\n400P\n500P\n700P\n1000P\n着席権\n着席権＋50P\n着席権＋100P\nVIP着席権×1 or 10PP\nVIP着席権×2 or 20PP\nVIP着席権×3 or 30PP\nVIP着席権×5 or 50PP",
      inline: true
    }
  )
  .setColor(1752220);

exports.run = (client, message, args) => {
  if (args[0] == "b" || args[0] == "B") {
    message.channel.send(EmbedBoxB);
    return;
  } else if (args[0] == "s" || args[0] == "S") {
    message.channel.send(EmbedBoxS);
    return;
  } else if (args[0] == "g" || args[0] == "G") {
    message.channel.send(EmbedBoxG);
    return;
  } else if (args[0] == "g+" || args[0] == "G+") {
    message.channel.send(EmbedBoxGp);
    return;
  } else if (args[0] == "p" || args[0] == "P") {
    message.channel.send(EmbedBoxP);
    return;
  }
};
