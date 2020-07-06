const Discord = require("discord.js");

function sleep(waitSec) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, waitSec);
  });
}

exports.run = (client, message, args) => {
  sleep(0)
    .then(function() {
      message.channel.send("日本で");
      return sleep(1200);
    })
    .then(function() {
      message.channel.send("カジノを");
      return sleep(1200);
    })
    .then(function() {
      message.channel.send("やろうって");
      return sleep(1200);
    })
    .then(function() {
      message.channel.send("いうやつが");
      return sleep(1200);
    })
    .then(function() {
      message.channel.send("まともな");
      return sleep(1200);
    })
    .then(function() {
      message.channel.send("はずないだろ！");
    });
  return;
};