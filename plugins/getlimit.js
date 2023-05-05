let handler = async (m) => {
    global.db.data.users[m.sender].limit += 10000;
    return m.reply(`*GetLimit*\nKamu telah mengklaim limit sebesar 10000 limit!`.trim());
  };
  
  handler.help = ['getlimit'];
  handler.tags = ['info'];
  handler.command = /^getlimit/i;
  handler.owner = true
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  module.exports = handler;