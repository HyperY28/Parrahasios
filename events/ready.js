const chalk = require('chalk')
const moment = require('moment')
const ayarlar = require("../ayarlar.json")
const prefix = ayarlar.prefix;
const kanal = '784344427992449045'
const log = message => {

    console.log(`${message}`)
}

module.exports = async client => {
    client.user.setPresence({activity:{name:`🛠️ ${prefix}yardım | v1.1 Güncellemesi!`}, status: 'idle'})
    log(chalk.red(`[Parrahasios] KOMUTLAR YÜKLENDI KULLANIMA HAZIR\n[Parrahasios] BOT BAĞLANDI. ${client.user.tag} | ${client.user.id} | BOT SAHİP: 'Yasin#3974`))
  }
