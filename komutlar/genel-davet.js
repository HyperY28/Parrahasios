const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
//

exports.run = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
  .setColor("BLUE")
  .setFooter(`© ${client.user.username}` , client.user.displayAvatarURL({dynamic: true}))
  .setThumbnail("")
  .setDescription('Gelişmiş Komutlar İçin Parrahasios Botu Kendi Sunucuna Davet Edebilirsin..')
  .setTimestamp()
  .addField("Linkiler:", `**[Destek Sunucusu](https://discord.gg/t9AsG3fjj7)**\n**[Davet Linki](https://discord.com/api/oauth2/authorize?client_id=846294060444549150&permissions=8&scope=bot)**`, false)
  .setURL('')
  	.setThumbnail(client.user.displayAvatarURL({dynamic: true}));

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'davet'
};
