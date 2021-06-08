const Discord = require('discord.js')

exports.run = (client, message, params)=> {
const embed = new Discord.MessageEmbed()
.setTitle(':alarm_clock: Bulunduğunuz Konumun Saati Aşağıda Yazmaktadır.')
.setTimestamp()
.setFooter(`${client.user.username} | Türkiye Saati =>`, client.user.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'saat'
  };
