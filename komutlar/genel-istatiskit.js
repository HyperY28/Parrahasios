const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
  .setTitle(`●▬▬▬▬「 <:code:845036904525070406> İstatistik Menüsü <:code:845036904525070406> 」▬▬▬▬●

> » <:dogrulanms:845036905371664444> Şu Anda Prefixim: \`p!\`

●▬▬▬「 <:ms:845036906131488818> Parrahasios BOT <:ms:845036906131488818> 」▬▬▬●`)
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setColor("RANDOM")
    .addField(":satellite: **__Ping__**",`\n Bot Gecikmesi: ${client.ws.ping}ms`, true)
    .addField(":people_hugging: **__Kullanıcı Sayısı__** ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField(":desktop: **__Sunucu Sayısı__**", `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField(":control_knobs: **__Kanal Sayısı__**", `${client.channels.cache.size.toLocaleString()}`, true)
    .addField(":alarm_clock: **__Çalışma Süresi__**", `${payidarzaman}`, true)
    .addField(":ideograph_advantage: **__Node.JS Versiyon__**", `${process.version}`, true)
    .addField(":ticket: **__Ram Kullanımı__**", `${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)
    .addField(":comet: **__Discord.JS__**", `${Discord.version}`, true)
    .addField(":european_castle: **__Konum__**", `Turkey :flag_tr:`, true)
    .addField("<:owner:845036906306732073> **__Bot Sahibi__**", `<@460489352942714880>`, true)
    .addField(":computer: **__İşletim Sistemi__**", ` \`Windows 10 | 64 Bit\` `, true)
    .addField(":movie_camera: **__CPU__**",` \`\`\`Intel(R) Xeon(R) CPU @ 2.30GHz\`\`\` `)
    .setFooter(`${message.author.tag} istedi...`, message.author.displayAvatarURL({dynamic: true}))

  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i','stats','botbilgi','is'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "is",
  usage: "is"
};

