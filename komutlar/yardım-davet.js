const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`●▬▬▬▬「 <:code:845036904525070406> Davet Menüsü <:code:845036904525070406> 」▬▬▬▬●

> » <:dogrulanms:845036905371664444> Şu Anda Prefixim: \`${prefix}\`

●▬▬▬「 <:ms:845036906131488818> Parrahasios BOT <:ms:845036906131488818> 」▬▬▬●`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  .addField(`<:invite:845036905841557504> p!davetleri-sıfırla`, "Davetleri Sıfırlar.", true)
  .addField(`<:dowland:845036905532096522> p!top`, "Lider Tablosunu Gösterir.", true)
  .addField(`<:dosya:845036905165750313> p!bonus-ekle`, "Bonus Ekler.", true)
  .addField(`<:hedye:845036905799876638> p!davet-kanal`, "Davet Kanalını Ayarlar.", true)
  .addField(`<:nfsw:845036906500980756> p!davet-kanal-sıfırla`, "Davet Kanalını Sıfırlar.", true)
  .addField(`Linkler:`, `[Destek Sunucusu](https://discord.gg/t9AsG3fjj7) | [Davet Linki](https://discord.com/api/oauth2/authorize?client_id=846294060444549150&permissions=8&scope=bot)`)

.setImage("")

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
  name: 'ydavet'
};
