const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`<:dosya:845036905165750313> **•** \`p!caps kısıt / kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

if(!args[0]) return message.channel.send(nn.setColor('RANDOM').setTitle('Bir hata oldu!').setDescription(`<:dosya:845036905165750313> Caps Lock kısıtmak istersen **p!caps-engel aç** yazmalısın.`))
if(args[0] === 'aç') {
db.set(`caps.${message.guild.id}`, true);
return message.channel.send(nn.setTitle(`<:dosya:845036905165750313> İşte bu kadar!`).setDescription('<:dosya:845036905165750313> Büyük harf kısıtlaması başarıyla açıldı.')).then(a => a.delete({timeout: 10000}));
} else if(args[0] === 'kapat') {
db.delete(`caps.${message.guild.id}`);
return message.channel.send(nn.setTitle('İşte bu kadar!').setDescription('<:dosya:845036905165750313> Büyük harf kısıtlaması başarıyla kapatıldı.')).then(a => a.delete({timeout: 10000}));
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'caps-engel'
};
