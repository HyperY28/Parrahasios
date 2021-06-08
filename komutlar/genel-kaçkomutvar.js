const discord = require('discord.js');
exports.run = async(client, ard, args) => {
ard.channel.send(`<:stats:845036907309957200> **Tam \`${client.commands.size}\` Adet __Komutum__ Bulunmakta !**`)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["komutlar"],
permLevel: 0
};
exports.help = {
    name : "komut-sayısı"
    };
