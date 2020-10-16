const Discord = require("discord.js");

exports.run = (client, message, args) => {
  var cont = message.content;
  var rep = cont.replace(`.s001 `, ``);
  
  var ID = `257081353663676421`;
  /* テストサーバー #一般*/
  //var ID = `664453697425768527`;

  client.channels.cache.get(ID).send(rep);
  return;
};
