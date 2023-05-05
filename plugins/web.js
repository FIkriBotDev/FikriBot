let handler = async m => m.reply(`*Yuk Mampir Ke Website Owner Bot!*\n => http://fikrifahrezi.rf.gd/` .trim()) 
handler.help = ['website']
handler.tags = ['info']
handler.command = /^website/i

module.exports = handler