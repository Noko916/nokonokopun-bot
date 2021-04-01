const Discord = require("discord.js");
const { isNumeric } = require("mathjs");
const db = require("quick.db");

module.exports = {
    name: "cmdper",
    description: `コマンド拒否率を変更,表示します\n\`.cmdper <h/o> <set/get> <percent> (OK)\``,
    aliases: ["percent", "per"],

    async execute(client, message, args) {

        if (args[0] == "set") {

            if (args[2] >= 50) {

                if (args[3] != "OK") {
                    `値が50以上です\nそれでもいい場合は最後に \`OK\` を足して再度コマンドを打ち直してください`
                    return;
                }

            }

            if (args[1] == "h" || args[1] == "o") {

                if (isNumeric(args[2])) {

                    if (args[1] == "h") db.set('h_per', args[2]);
                    if (args[1] == "o") db.set('o_per', args[2]);

                    message.channel.send(`${args[1]}_per を \`${args[2]}%\` に設定しました`);
                    return;

                } else {

                    message.channel.send(`3つ目の値の指定\`(percent)\`が間違っているか、数字以外を入力しています\n\`.cmdper <set/get> <h/o> <percent> (OK)\` の形式で入力してください`);
                    return;
                }
            }

            message.channel.send(`2つ目の値の指定\`(h/o)\`が間違っています\n\`.cmdper <set/get> <h/o> <percent> (OK)\` の形式で入力してください`);
            return;

        }

        if (args[0] == "get") {

            if (args[1] == "h") {
                message.channel.send(`h_per は \`${db.get('h_per')}%\` です`);
                return;
            }

            if (args[1] == "o") {
                message.channel.send(`o_per は \`${db.get('o_per')}%\` です`);
                return;
            }

            message.channel.send(`2つ目の値の指定\`(h/o)\`が間違っています\n\`.cmdper <set/get> <h/o> <percent> (OK)\` の形式で入力してください`);
            return;
        }

        message.channel.send(`1つ目の値の指定\`(set/get)\`が間違っています\n\`.cmdper <set/get> <h/o> <percent> (OK)\` の形式で入力してください`);

        return;
    },
};
