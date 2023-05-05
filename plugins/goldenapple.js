let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (user.health >= 200) return m.reply(`
Your ❤️health is full!
`.trim())
    const heal = 50 
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((200 - user.health) / heal)))) * 1
    if (user.potion < count) return m.reply(`
Your 🍏Golden apple is not enough, you only have *${user.goldenapple}* 🍏Golden Apple
type *${usedPrefix}buy goldenapple ${count - user.goldenapple}* to buy 🍏Golden Apple
`.trim())
    user.goldenapple -= count * 1
    user.health += heal * count
    m.reply(`
Successful use of *${count}* 🍏Golden Apple
`.trim())
}

handler.help = ['gapple']
handler.tags = ['rpg']
handler.command = /^(gapple)$/i
handler.limit = true

module.exports = handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
