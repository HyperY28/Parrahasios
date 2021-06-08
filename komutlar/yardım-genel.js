const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`●▬▬▬▬「 <:code:845036904525070406> Genel Yardım Menüsü <:code:845036904525070406> 」▬▬▬▬●

> » <:dogrulanms:845036905371664444> Şu Anda Prefixim: \`${prefix}\`

●▬▬▬「 <:ms:845036906131488818> Parrahasios BOT <:ms:845036906131488818> 」▬▬▬●`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addField("<:stats:845036907309957200> p!istatistik","İstatistiklere bakarsınız.", true)
.addField("<:camera:845036903786086420> p!avatar", "Avatarınıza bakarsınız.", true)
  .addField("<:invite:845036905841557504> p!davet", "Davet Linkine bakarsınız.", true)
  .addField("<:sagr:845036907141660712> p!afk", "Afk moduna geçersiniz.", true)
  .addField("<:boost:845036903262060567> p!komutlar", "Komut Sayısını Gösterir.", true)
  .addField("<:dowland:845036905532096522> p!emojiler", "Sunucudaki Emojileri Gösterir.", true)
  .addField("<:canta:845036903685816320> p!kullanıcı-bilgi", "Başkasının veya kendinizin bilgilerinize bakarsınız.", true)
  .addField("<:code:845036904525070406> p!hatabildir", "Bot Üzerinde Bulduğunuz Hataları Bildirebilirsiniz.", true)
  .addField("<:nfsw:845036906500980756> p!kurallar", "Basit Düzeyde Sunucu Kuralları Oluşturur.", true)
  .addField("<:ayar:845036903215661066> p!ping", "Botun Gecikmesini Gösterir.", true)
  .addField(`Linkler:`, `[Destek Sunucusu](https://discord.gg/t9AsG3fjj7) | [Davet Linki](https://discord.com/api/oauth2/authorize?client_id=846294060444549150&permissions=8&scope=bot)`)
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
  name: 'genel'
};
