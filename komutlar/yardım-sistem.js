const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`●▬▬▬▬「 <:code:845036904525070406> Sistem Menüsü <:code:845036904525070406> 」▬▬▬▬●

> » <:dogrulanms:845036905371664444> Şu Anda Prefixim: \`${prefix}\`

●▬▬▬「 <:ms:845036906131488818> Parrahasios BOT <:ms:845036906131488818> 」▬▬▬●`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
     .addField(`<:ayar:845036903215661066> ${prefix}anti-raid-bot-sistemi`,"Sunucudaki Kötü Amaçlı Botların Atılmasını,Taranmasını Sağlar.", true)
     .addField(`<:ayar:845036903215661066> ${prefix}caps`,"Caps Lock Korumasını açar.", true)
     .addField(`<:ayar:845036903215661066> ${prefix}küfür`,"Küfür Korumasını açar.", true)
     .addField(`<:ayar:845036903215661066> ${prefix}reklam`,"Reklam Korumasını açar.", true)
     .addField(`<:ayar:845036903215661066> ${prefix}otorol`,"Otorol Komutlarını gösterir.", true)
     .addField(`<:ayar:845036903215661066> ${prefix}spam`,"Spam Korumasını açar.", true)
     .addField(`<:ayar:845036903215661066> ${prefix}sayaç-sistem`,"Sayaç Komutlarını gösterir.", true)
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
  name: 'sistem'
};
