const Discord = require("discord.js");

module.exports = {
  name: "yotei",
  description: "予定表を貼ります",
  aliases: ["schedule"],

  async execute(client, message, args) {

    message.channel.send(
      "予定表どーーーん\nhttps://docs.google.com/spreadsheets/d/1i-VrpAqRVpzcPwlDzTnNA75YFucTwsi8TKSlUfzu4W8/edit?usp=sharing"
    );
    return;
  },
};
