const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`●▬▬▬▬「 <:code:845036904525070406> Yetkili Menüsü <:code:845036904525070406> 」▬▬▬▬●

> » <:dogrulanms:845036905371664444> Şu Anda Prefixim: \`${prefix}\`

●▬▬▬「 <:ms:845036906131488818> Parrahasios BOT <:ms:845036906131488818> 」▬▬▬●`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addField(`<:moderasyon:837624383487868949> ${prefix}sil`,`Belirttiğiniz kadar mesajı siler.`, true)
  .addField(`<:dcstaff:845036903950057503> ${prefix}yaz`,`Belirttiğiniz yazıyı yazar.`, true)
  .addField(`<:coder:845036904046919760> ${prefix}oylama`,"Belirttiğiniz şeyden oylama başlatır.", true)
  .addField(`<:moderasyon:837624383487868949> ${prefix}bansay`,"Sunucudaki Banlı kişileri sayar.", true)
    .addField(`<:dcstaff:845036903950057503> ${prefix}ban`,"Etiketlenen Kişiyi Banlar.", true)
    .addField(`<:coder:845036904046919760> ${prefix}sesegir`,"ID sini Belirtiğiniz Ses Kanalına Girer.", true)
    .addField(`<:moderasyon:837624383487868949> ${prefix}kanal-sıfırla`,`Kanalı Silip Ayınısı Oluşturur`, true)
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
  name: 'yetkili'
};
