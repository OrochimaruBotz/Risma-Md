let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
┏──「 Donasi • Dana 」─⬣
│ • Pulsa : 088804947282
│ • Dana : 088804947282
╰────────⬣
┏──「 *NOTE* 」─⬣
│ > Ingin donasi? wa.me/6288804947282
│ _Biar Saya Semangat Untuk Menyalakan Bot 24 Jam_
│ _Jangan Lupa Sering² Donasi🗿_
┗────────⬣
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
