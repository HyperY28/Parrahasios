const Discord = require('discord.js');
exports.run = async (client, message, args) => {

if(!message.member.roles.cache.has('843476211946094593') && !message.member.hasPermission('CONNECT') ) return message.channel.send('<:yanls:845036908086296667> Bu kodu kullanmak için yeterli yetkin yok!')

 let kanal = args[0]
 if (!kanal) return message.channel.send("<:yanls:845036908086296667> Bir Kanal ID'si Belirt")

 client.channels.cache.get(kanal).join();

message.channel.send("<:dogru:845036905032712202> Ses Kanalına Başarılı Bir Şekilde Bağlandım")

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sesgir","ses-gir"],
  permLevel: 0
}
exports.help = {
  name: 'sesegir',
  description: "",
  usage: ''
}
