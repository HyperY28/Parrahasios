const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} args
 */
exports.run = async (client, message, args) => {
	  const db = new Database("./Servers/" + message.guild.id, "Settings");
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply("<:yanls:845036908086296667> Yetkiniz Bulunmamaktadır.")
        let kanal = message.mentions.channels.first()
        if (!kanal) return message.channel.send("<:yanls:845036908086296667> Lütfen Bir Kanal Belirt **p!davet-kanal #kanal**")
    if(kanal){
    var type = ["Channel"];
    db.set(`settings.${type}`, kanal.id);

    message.reply(`Kanal Ayarlama Başarılı <:dogru:845036905032712202>`);


}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet-kanal',
  description: 'Bot adminlerinin bot üzerinde kod test etmesini sağlar.',
  usage: 'eval <kod>'
};
