const Discord = require('discord.js');
const db = require('wio.db')
exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:yanls:845036908086296667> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('<:yanls:845036908086296667> Otorol Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `p!oto-rol-msg -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`')

 message.channel.send('<:dogru:845036905032712202> Oto-Rol mesajını `'+mesaj+'` Olarak ayarladım.')
 db.set(`otomesaj_${message.guild.id}`, mesaj)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oto-rol-msg'],
  permLevel: 0
};

exports.help = {
  name: 'oto-rol-msg',
  description: 'taslak',
  usage: 'oto-rol-msg'
};
