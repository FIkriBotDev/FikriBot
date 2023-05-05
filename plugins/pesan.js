let ownerMsg = "Reset limit seminggu sekali untuk mencegah player curang jual limit demi top money!"; //tulis pesan disini
let handler = async m => m.reply(`*[FikriBot | Broadcast Group]*\nPesan: ${ownerMsg}\nDari: @6287769811262 (Owner Bot)\n\n~FikriBot` .trim()) 
handler.help = ['pengumuman']
handler.tags = ['info']
handler.command = /^botmsg/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler