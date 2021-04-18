const Discord = require("discord.js");

module.exports = {
    name: "delete",
    description: "メッセージを消去します 複数同時に消去可能\n\`.delete [件数]\`",

    async execute(client, message, args) {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Error: 権限がありません");

        let limitMsg = 0;

        if (!args[0]) { limitMsg = 1; } else { limitMsg = args[0]; }

        limitMsg = Number(limitMsg) + 1;

        const dMsg = await message.channel.messages.fetch({ limit: limitMsg });
        message.channel.bulkDelete(dMsg);

        message.channel.send(`${message.member.displayName} が ${args[0]} 件のメッセージを消去しました`);

        //message.channel.send(`\`\`\`args  ` + args + `\nlimit ` + limitMsg + `\`\`\``);

        return;
    }
};
