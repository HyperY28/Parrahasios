const Discord = require("discord.js")
const db = require('wio.db')

exports.run = async (client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "tr") {
        const onayembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setAuthor("Kanal Sıfırla Komutu")
        .setFooter("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz")
        .setDescription("**UYARI!** \n\nEğer kanalı sıfırlama işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n")
        message.channel.send(onayembed).then(msg => {
      msg.react('👍').then(() => msg.react('👎'));

      const filter = (reaction, user) => {
          return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
      };

      msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
              const reaction = collected.first();

              if (reaction.emoji.name === '👍') {
            message.channel.clone({position: message.channel.position});
            message.channel.delete();
              } else {
                const xdembed2 = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('Kanala bomba atıldı!')
                .setImage('https://tenor.com/view/destory-eexplode-nuke-gif-6073338')
                  message.reply(xdembed2);
            msg.delete({timeout:3000})
              }
          })
          .catch(collected => {
              message.reply('<:yanls:845036908086296667> Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz.');
          });

      })

    }else{
        const onayembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setAuthor("Kanal Sıfırlama Komutu")
        .setFooter("Onaylamak İçin 👍 emojisine, Reddetmek İçin 👎 emojisine basınız!")
        .setDescription("**DİKKAT!** \n\nEğer kanalı sıfırlama işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n")
        message.channel.send(onayembed).then(msg => {
      msg.react('👍').then(() => msg.react('👎'));

      const filter = (reaction, user) => {
          return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
      };

      msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
              const reaction = collected.first();

              if (reaction.emoji.name === '👍') {
            message.channel.clone({position: message.channel.position});
            message.channel.delete();
              } else {

                const xdembed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Sıfırlama Başarılı')
                .setImage('https://tenor.com/view/destory-eexplode-nuke-gif-6073338')
                message.reply(xdembed);
            msg.delete({timeout:3000})
              }
          })
          .catch(collected => {
              message.reply('<:yanls:845036908086296667> Zaman Aşımına Uğradı !');
          });

      })
    }

};




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanal-sıfırla"],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = {
	name: 'nuke',
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: 'nuke'
}
