const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.MessageEmbed()
  .setColor("RANDOM")

  .setTitle(`●▬▬▬▬「 <:code:845036904525070406> Gif Menü <:code:845036904525070406> 」▬▬▬▬●

> » <:dogrulanms:845036905371664444> Şu Anda Prefixim: \`${prefix}\`

●▬▬▬「 <:ms:845036906131488818> Parrahasios BOT <:ms:845036906131488818> 」▬▬▬●`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addField("<:dowland:845036905532096522> p!gif-ara","Belirttiğiniz gifi bulur atar.", true)
  .addField("<:canl:845036903408468018> p!gif-man","Erkek gifi atar.", true)
  .addField("<:dowland:845036905532096522> p!gif-woman","Kız gifi atar.", true)
  .addField("<:canl:845036903408468018> p!gif-couple","Kız ve Erkek gifi atar.", true)
  .addField("<:dowland:845036905532096522> p!gif-baby","Babek gifi atar.", true)
    .addField("<:canl:845036903408468018> p!gif-animal","Hayvan gifi atar.", true)
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
  name: 'gif-menü'
};
