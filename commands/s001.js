const Discord = require("discord.js");

exports.run = (client, message, args) => {
  var cont = message.content;
  var rep = cont.replace(".repeat ", "");
  var ID = 664453697425768527;

  client.channels.cache.get(ID).send(rep)
  return;
};
