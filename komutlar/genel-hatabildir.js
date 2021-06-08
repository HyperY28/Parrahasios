const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {

let type = args.slice(0).join(' ');
if (type.length < 1) {

const embed = new Discord.MessageEmbed()

.setColor('RANDOM')
.setDescription(`<:dikkat:845036904129757205> **Eksik Kullanım : ${prefix}hata-bildir <bulduğunuz hata>**`)

return message.channel.send(embed)
}

const embed = new Discord.MessageEmbed()

.setColor('RANDOM')
.setDescription('<:dogru:845036905032712202> **Botta Bulduğunuz Hata Başarıyla Bildirildi.**\n:white_check_mark: **En Yakın Zamanda Sana Cevap Vereceğiz!**')

message.channel.send(embed)

const embed2 = new Discord.MessageEmbed()

.setColor("GREEN")

.setDescription(`**${message.author.tag}** Adlı Kullanıcının **Botta Bulduğu Hata ;**`)

.addField(`<:stats:845036907309957200> **Gönderen Kişinin Bilgileri ;**`, `<:invite:845036905841557504> Kullanıcı İd : ${message.author.id}\n<:invite:845036905841557504>  Kullanıcı Adı : ${message.author.username}\n<:canta:845036903685816320> Kullanıcı Tagı : #${message.author.discriminator}`)
.addField("<:dosya:845036905165750313> **Gönderilen Hata/Bug Mesajı**", type)

.setThumbnail(message.author.avatarURL)

client.channels.cache.get('843479989743648829').send(embed2);

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["hata-bildir","hatabildir"],
    permLevel: 0
}

exports.help = {
    name: 'hata'
}
