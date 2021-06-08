const Discord = require('discord.js');
const db = require('wio.db')
exports.run = (client, message, args) => {
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:yanls:845036908086296667> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()

if(!rol) return message.channel.send(`<:yanls:845036908086296667> Ayarlamam İçin Bir Rol Etiketlemeilisin.
<:yanls:845036908086296667> Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
<:yanls:845036908086296667> Örnek Kullanım : p!otorol @rol #kanal

<:dikkat:845036904129757205>Önemli Not: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem <:dosya:845036905165750313>`)
 if(!kanal) return message.channel.send('<:nfsw:845036906500980756> Ayarlamam İçin Bir Kanal Etiketlemelisin.')

 message.channel.send(`<:onayli:845036906366107659> Otorol Sistemi Aktif Edildi
<:onayli:845036906366107659> '${rol}' Olarak Güncelledim!
<:onayli:845036906366107659> Otorol Log Kanalını '${kanal}' Olarak Güncelledim!`)

db.set(`otok_${message.guild.id}`, kanal.id)
db.set(`otorol_${message.guild.id}`, rol.id)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["otorol-ayarla","oto-rol-ayarla"],
  permLevel: 0
};

exports.help = {
  name: 'otorolayarla'
};
