let handler = async m => m.reply(`*Cek Runtime Bot Secara Online Di Website!*\n => http://uptime.fikribot.rf.gd/` .trim()) 
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^runtime/i

module.exports = handler