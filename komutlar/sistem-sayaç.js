const Discord = require('discord.js');
const data = require('wio.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed()
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`p!sayaç\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

const erorrEmbed = new Discord.MessageEmbed().setTitle('<:dikkat:845036904129757205> Bir hata oldu!');
if(!args[0]) return message.channel.send(erorrEmbed.setDescription(`<:dikkat:845036904129757205> Bir kanal etiketlemeyi unuttunuz.

**Örnek:**
\`\`\`p!sayaç #kanaletiket 1000\`\`\``));

if(!message.mentions.channels.first()) return message.channel.send(erorrEmbed.setDescription(`<:dikkat:845036904129757205> Bir kanal etiketlemeyi unuttunuz.

**Örnek:**
\`\`\`p!sayaç #kanaletiket 1000\`\`\``));

if(!args[1]) return message.channel.send(erorrEmbed.setDescription(`<:dikkat:845036904129757205> Bir sayı girmeyi unuttunuz.

**Örnek:**
\`\`\`p!sayaç #kanaletiket 1000\`\`\``));
message.channel.send(erorrEmbed.setTitle('<:dogru:845036905032712202> İşte bu kadar!')
.setDescription(`Sayaç kontrol olarak kullanılacak: ${message.mentions.channels.first()} kanalı olarak ayarlandı.`));
data.set(`sayaç.kanal.${message.guild.id}`, message.mentions.channels.first().id);
data.set(`sayaç.sayı.${message.guild.id}`, args[1]);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sayaç'
};
