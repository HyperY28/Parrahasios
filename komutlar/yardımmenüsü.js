const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("RANDOM")
      .setTitle(`●▬▬▬▬「 <:code:845036904525070406> Yardım Menüsü <:code:845036904525070406> 」▬▬▬▬●

> » <:dogrulanms:845036905371664444> Şu Anda Prefixim: \`${prefix}\`

●▬▬▬「 <:ms:845036906131488818> Parrahasios BOT <:ms:845036906131488818> 」▬▬▬●`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addField(`<:stats:845036907309957200> p!genel`, "Genel Komutları Gösterir.", true)
  .addField(`<:dosya:845036905165750313> p!gif-menü`, "Gif Komutları Gösterir.", true)
   .addField(`<:canl:845036903408468018>  p!eğlence`, "Eğlence Komutları Gösterir.", true)
  .addField(`<:dcstaff:845036903950057503> p!yetkili`, "Yetkili Komutları Gösterir.", true)
  .addField(`<:invite:845036905841557504> p!ydavet`, "Davet Komutları Gösterir.", true)
.addField(`<:hedye:845036905799876638> p!sistem`, "Sistem Komutları Gösterir.", true)
.addField(`<:nfsw:845036906500980756> Linkler:`, `[Destek Sunucusu](https://discord.gg/t9AsG3fjj7) | [Davet Linki](https://discord.com/api/oauth2/authorize?client_id=846294060444549150&permissions=8&scope=bot)`)
.setImage(``)
.setFooter(client.user.username, client.user.displayAvatarURL())
return message.channel.send(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};
