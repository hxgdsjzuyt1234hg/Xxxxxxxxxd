// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['6289531470531'] //Own Number
global.developer = "Zyrox Xeonix" //Dev Name
global.botname = "Xeonix" //Bot Name
global.version = "4.0.0" //Version Bot

//Sticker Setiings
global.packname = "Sticker By" //Pack Name 
global.author = "Zyrox Xeonix" // Author
//
global.yt = 'https://youtube.com/@zyrox'
global.idch = '1203633667950043@newsletter'
global.namaowner = "ZyroxModz"
global.title = "Xeonix"
global.namach = 'Xeonix New'
global.namafile = 'ZyroxModz'
global.foother = "© Xeonix"
//Social Media Settings
global.ytube = "https://youtube.com/@ZyroxTeam"
global.ttok = "https://tiktok.com/@ZyroxXeonix"
global.igram = "https://instagram.com/@ZyroxModz"
global.chtele = "https://t.me/tamaryuichicrasher"
global.tgram = "https://t.me/ZyroxModz"

//Bug Name Settings
global.bak = {
Ios: " ⿻ᬃ𝐙𝐲𝐫𝐨𝐱 𝐗𝐞𝐨𝐧𝐢𝐱 𝐊𝐢𝐥𝐥⃟⃟⿻ ",
Andro: "⩟⬦𪲁 𝐙͜͢𝐘͠𝐑̋͡𝐎̸̷̷̷͡𝐗͜͢𝐗 -", 
Crash: " ̶C̶r̶a̶s̶h̶U̶l̶t̶i̶m̶a̶̶t̶e ̶",
Freeze: "𝐙𝐲𝐫𝐨𝐱𝐔𝐥𝐭𝐢𝐦𝐚𝐭𝐞",
Ui: "ℭ𝔯𝔴𝔰𝔥 𝔘𝔦 𝔖𝔶𝔰𝔱𝔢𝔪"
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})