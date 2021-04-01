const Discord   = require("discord.js");
const db        = require("quick.db");

module.exports = {
    name: "cmdper",
    description: "コマンド拒否率を変えるか参照します",
    aliases: ["percent", "per"],

    async execute(client, message, args) {

        if(args[0] == "set") {
            
            if(args[1] == "h") db.set('h_per', args[2]);
            if(args[2] == "o") db.set('o_per', args[2]);
        }

        if(args[0] == "get") {

            if(args[1] == "h") msg.channel.send(db.get('h_per'));
            if(args[1] == "o") msg.channel.send(db.get('o_per'));
        }

        return;
    },
};
