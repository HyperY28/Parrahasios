const Discord = require('discord.js');
const data = require('wio.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('Parrahasios Giriş & Sayaç Sistem').setDescription(`\`p!sayaç #kanalEtiket (Hedef Sayı)\`
**Sunucun için toplam bir rakam tut**

\`p!sayaç-kapat\`
<:dikkat:845036904129757205> **Kurulu olan sayaç sistemi kapatır**`)
.setImage('https://media.discordapp.net/attachments/784329580805881856/786852447460524042/Gif_Dosya_2.gif').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/806936817068015648/845731990640918538/Screenshot_2021-05-19-11-30-13-37.jpg'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sayaç-sistem'
};
