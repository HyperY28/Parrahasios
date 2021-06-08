const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

exports.run = async (bot, msg, args) => {

        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');

        let user = msg.mentions.users.first() || msg.author;

        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL({dynamic: true});
        userinfo.id = msg.author.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "<:konus:845036906239492097> Oynadığı Bir Oyun Yok."
        userinfo.status = user.presence.status.toString()

        .replace("dnd", `<:dnd:845036905276112946> Rahatsız Etmeyin`)
        .replace("online", `<:onlne:845036906509238303> Çevrimiçi`)
        .replace("idle", `<:idle:845036905963716668> Boşta`)
        .replace("offline", `<:offline:845036906710171648> Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `<:yanls:845036908086296667> Hayır`)
        .replace("true", `<:dogru:845036905032712202> Evet`)

        userinfo.sonmesaj = user.lastMessage || "<:nfsw:845036906500980756> Son Yazılan Mesaj Bulunamadı." || "<:nfsw:845036906500980756> Son Yazılan Mesaj Gösterilemedi."

        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')

        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)

        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')

        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)

        const uembed = new Discord.MessageEmbed()

        .setTitle(user.tag, user.displayAvatarURL())
        .addField(`Şu Anda Oynadığı Oyun: <:dosya:845036905165750313>`, userinfo.od1, false)
        .addField(`Durum:`, userinfo.status, false)
        .setColor('RANDOM')
        .addField(`Sunucuya Katılım Tarihi: <:canl:845036903408468018>`, userinfo.dctarihkatilma, false)
        .addField(`Hesap Oluşturulma Tarihi <:camera:845036903786086420>: `, userinfo.dctarih, false)
        .addField(`Kimlik : <:bekleniyor:845036903329562665>`, userinfo.id, true)
        .addField(`Bot Mu ?: <:developerbadge:845036904168292392> `, userinfo.bot, true)
        .addField(`Roller: <:invite:845036905841557504>`, `${msg.guild.members.cache.get(user.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu Kullanıcıda Hiç Rol Bulunmuyor!**"}`, false)
        .addField(`Son Gönderdiği Mesaj: <:nfsw:845036906500980756>`, userinfo.sonmesaj, false)

        msg.channel.send(uembed)
    };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kullanıcı-bilgim','kullanıcı-bilgi','kullanıcıbilgi'],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcıbilgim'
};
