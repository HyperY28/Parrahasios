const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let westraA = message.guild;
  westraA
    .fetchBans()
    .then(westra =>
    message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`<:yanls:845036908086296667> Sunucunuzda **${westra.size}** banlanmış üye bulunmaktadır.`))
  )
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bansay"],
  permLevel: 0
};

exports.help = {
  name: "bansay"
};
