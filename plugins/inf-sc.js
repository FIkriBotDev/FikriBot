let handler = async m => m.reply(`
            𝒃𝒐𝒕 𝒊𝒏𝒊 𝒎𝒆𝒏𝒈𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑺𝑪 𝒅𝒊𝒔𝒊𝒏𝒊 https://youtu.be/1-lDeLNkgk4 𝒋𝒈𝒏 𝒍𝒖𝒑𝒂 𝒔𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆
`.trim()) //

handler.customPrefix = /^(.sc|.script|sc|script)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
module.exports = handler