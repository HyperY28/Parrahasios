const Discord = require('discord.js');

 exports.run = (client, message, args) => {

   if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
  .addField('<:dikkat:845036904129757205> Uyarı <:dikkat:845036904129757205>', '`oylama` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(

     new Discord.MessageEmbed()

     .setDescription(`<:yanls:845036908086296667> **Eksik Kullanım: p!oylama <oylanacak şey>**`)
   .setColor("RANDOM"));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send(

       new Discord.MessageEmbed()

       .setColor("RANDOM")
       .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
       .setTimestamp()
       .setFooter('Oylama Sistemi')
      .setTitle(`**Oylama**`, client.user.displayAvatarURL({dynamic: true}))
       .setDescription(`\`\`\`${question}\`\`\``, true)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });
message.delete();
     };


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'oylama'
};
