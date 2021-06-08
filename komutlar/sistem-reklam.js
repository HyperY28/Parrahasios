const db = require('wio.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:yanls:845036908086296667> Buna yetkin yok!`);
  if (!args[0]) return message.channel.send(`<:yanls:845036908086296667> aç veya kapat yazmalısın. \`${ayarlar.prefix}reklamkoruma aç\``)
let kufur = await db.fetch(`kufur_${message.guild.id}`)
  if (args[0] == 'aç') {
if (kufur) {
message.channel.send('<:dikkat:845036904129757205> Reklam Koruması Zaten Aktif!')
return
}
else {
    db.set(`kufur_${message.guild.id}`, 'Açık')
     message.channel.send('<:dogru:845036905032712202> Reklam filtresi başarıyla açıldı!')
}
  }
  else if (args[0] == 'kapat') {
    db.delete(`kufur_${message.guild.id}`, 'Kapalı')
      message.channel.send('<:dogru:845036905032712202> Reklam Filtresi başarıyla kapatıldı!')
  }

}
//CodeFENIX
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reklam-koruma"],
  permLevel: 3
};
// CodeFENIX
exports.help = {
  name: 'reklam-engel',
  description: 'CFX',
  usage: 'reklamkoruma'
};
