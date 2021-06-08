const db = require("wio.db");
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  if (
    !message.member.hasPermission("ADMINISTRATOR") &&
    !message.member.hasPermission("MANAGE_GUILD")
  )
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("<:dikkat:845036904129757205> Gerekli Yetkiniz Bulunmamaktadır!")
    );

  const guvenliid = args[0];

  if (!guvenliid)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("<:dikkat:845036904129757205> Bir rol id gir!")
    );

  db.set(`guvenli_${message.guild.id}`, guvenliid);

  message.channel.send(
    new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<:dogru:845036905032712202> Güvenli kişilere artık <@&${guvenliid}> rolü verilcek!`)
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "güvenli-rol"
};
