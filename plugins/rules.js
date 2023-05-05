let handler = async m => m.reply(`*Rules Menggunakan Bot*\n1. No spam\n2. No telp bot/owner\n3.Jika bot sedang lag/delay, jangan ditambah spam\n4. No curang(Jual semua limit demi top money).\n\n~FikriBot` .trim()) 
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules/i

module.exports = handler