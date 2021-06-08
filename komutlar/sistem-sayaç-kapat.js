const Discord = require('discord.js');
const data = require('wio.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed()
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`<:yanls:845036908086296667> Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`p!sayaç-kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

const erorrEmbed = new Discord.MessageEmbed().setTitle('<:yanls:845036908086296667> Bir hata oldu!').setColor('RANDOM');
message.channel.send(erorrEmbed.setTitle('<:dogru:845036905032712202> İşte bu kadar!')
.setDescription('<:dogru:845036905032712202> Sayaç başarıyla kapatıldı.'));
data.delete(`sayaç.kanal.${message.guild.id}`, message.mentions.channels.first());
data.delete(`sayaç.sayı.${message.guild.id}`, args[1]);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sayaç-kapat'
};
