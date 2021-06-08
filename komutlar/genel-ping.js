const Discord = require("discord.js"),
  client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  message.channel.send(new Discord.MessageEmbed() .setColor("RANDOM") .setDescription(`<:ms:845036906131488818> **Ping: __${client.ws.ping}__ms!**`));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ping'
};
