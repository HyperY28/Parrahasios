const Discord = require('discord.js');
const loglar = require('../ayarlar.json');
const db = require('wio.db');


var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("RANDOM")
      .setAuthor(`Parrahasios Otorol Komutları`, client.user.displayAvatarURL({dynamic: true}))
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addField("<:ms:845036906131488818> Otorol Ayarlamak İçin p!oto-rol-ayarla @rol #kanal", "Bu Kod Normal Kullanıcılar İçindir")
.addField("<:code:845036904525070406> Otorol Kapat", "Otorol Kapatmak İçin Bunu Yazın `p!oto-rol-kapat`")
.addField("<:invite:845036905841557504> +oto-rol-msg 》 Otorol Mesajını Ayarlar. ", "Örnek: `p!oto-rol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz.`")
.addField("\n <:dcstaff:845036903950057503> Otorol Mesaj Komutu Değişkenleri: \`-server-\` Sunucu İsmini Atar. | \`-uye-\` Gelen Üyenin İsmini Atar. | \`-rol-\` Verdiği Rolü Atar. | \`-uyesayisi-\` Sunucudaki Toplam Üye Sayısını Atar.")
return message.channel.send(eğlence);


};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
