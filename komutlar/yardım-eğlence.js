const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`●▬▬▬▬「 <:code:845036904525070406> Eğlence Menüsü <:code:845036904525070406> 」▬▬▬▬●

> » <:dogrulanms:845036905371664444> Şu Anda Prefixim: \`${prefix}\`

●▬▬▬「 <:ms:845036906131488818> Parrahasios BOT <:ms:845036906131488818> 」▬▬▬●`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addField(`<:boost:845036903262060567> ${prefix}balık-tut`,"Balık tutar.", true)
  .addField(`<:boost:845036903262060567> ${prefix}stresçark`,"Stres çarkı çevirir.", true)
    .addField(`<:boost:845036903262060567> ${prefix}8ball`,"8ball oynar.", true)
  .addField(`<:boost:845036903262060567> ${prefix}slots`,"Slots oynar.", true)
    .addField(`<:boost:845036903262060567> ${prefix}koş`,"Koşarsınız.", true)
    .addField(`<:boost:845036903262060567> ${prefix}nitro`,"Bedava Nitro Atar", true)
  .addField(`<:boost:845036903262060567> ${prefix}yılbaşı`,"Yılbaşına Kaç Gün Kaldı Öğrenirsiniz.", true)
.addField(`<:boost:845036903262060567> ${prefix}kartopu`,"Etiketlediğin Kişiye Kartopu Atarsın.", true)
.addField(`<:boost:845036903262060567> ${prefix}kaçcm`,"Kaç cm olduğunu öğrenirsiniz.", true)
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
  name: 'eğlence'
};
