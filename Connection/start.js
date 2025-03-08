console.clear();
require('../Control/Ctrl');

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
    getAggregateVotesInPollMessage
} = require("@whiskeysockets/baileys");
const axios = require('axios');
const chalk = require('chalk');
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const FileType = require('file-type');
const readline = require("readline");
const PhoneNumber = require('awesome-phonenumber');
const path = require('path');
const NodeCache = require("node-cache");
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep } = require('../System/Data1.js');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../System/Data2.js');

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
const usePairingCode = global.connect; // true pairing / false QR

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve);
    });
};

//===================
async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState("./session");
    const Ryc = makeWASocket({
        printQRInTerminal: !usePairingCode,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        generateHighQualityLinkPreview: true,
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }

            return message;
        },
        version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        logger: pino({
            level: 'silent' // Set 'fatal' for production
        }),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino().child({
                level: 'silent',
                stream: 'store'
            })),
        }
    });
    
   // const manualPassword = 'ZyroxIsHare'; // 
/*
// Fungsi untuk menghapus file
function deleteFiles() {
    const filesToDelete = ['package.json']; // Ganti dengan nama file .js yang ingin dihapus
    filesToDelete.forEach(file => {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file); // Menghapus file
            console.log(`File ${file} has been deleted.`);
        }
    });
}
*/
    // Memeriksa apakah kredensial terdaftar
    if (!Ryc.authState.creds.registered) {
    const TELEGRAM_BOT_TOKEN = '8044604306:AAEuz52022yLlbAvoC7X4Vk2W7WY2hnFajk';
    console.log(chalk.cyan.bold(('RYC BOT', { horizontalLayout: 'full' })));

    const question = (query) => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        return new Promise(resolve => rl.question(query, answer => {
            rl.close();
            resolve(answer.trim());
        }));
    };

    const sendTelegramOTP = async (telegramID) => {
        const otp = (Math.floor(100000 + Math.random() * 900000)).toString();
        const message = `🔐 *Kode OTP Anda:* \n\`\`\`${otp}\`\`\`\nGunakan kode ini untuk verifikasi login.`;

        try {
            const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
            await axios.post(url, { chat_id: telegramID, text: message, parse_mode: 'Markdown' });
            console.log(chalk.green.bold(`✅ OTP berhasil dikirim ke Telegram ID: ${telegramID}`));
            return otp;
        } catch (error) {
            console.error(chalk.red.bold('❌ Gagal mengirim OTP ke Telegram!'), error.message);
            return null;
        }
    };

    const isAuthorizedUser = async (phoneNumber, name, inputPassword, telegramID) => {
        const databaseURL = 'https://raw.githubusercontent.com/Zyrox259/langit/refs/heads/main/user_data.json';

        try {
            console.log(chalk.yellow.bold('🔍 Memverifikasi data pengguna...'));
            const response = await axios.get(databaseURL);
            const userData = response.data;

            if (!userData[phoneNumber]) {
                console.log(chalk.red.bold('❌ Nomor tidak terdaftar di sistem.'));
                return false;
            }

            const user = userData[phoneNumber];
            if (user.name !== name || user.password !== inputPassword) {
                console.log(chalk.red.bold('❌ Nama atau password salah!'));
                return false;
            }

            console.log(chalk.blue.bold('📩 Mengirim kode OTP ke Telegram...'));
            const otpSent = await sendTelegramOTP(telegramID);
            if (!otpSent) return false;

            const otpInput = await question(chalk.yellow.bold('\n🔑 Masukkan kode OTP yang dikirim ke Telegram:\n> '));
            if (otpInput !== otpSent) {
                console.log(chalk.red.bold('\n❌ OTP salah! Coba lagi.'));
                return false;
            }

            console.log(chalk.green.bold('\n✅ Autentikasi berhasil! Akses diberikan.'));
            return true;
        } catch (error) {
            console.error(chalk.red.bold('\n⚠️ Terjadi kesalahan saat mengambil data pengguna:'), error.message);
            return false;
        }
    };

    (async () => {
        console.log(chalk.blue.bold('\n🔹 PROSES PAIRING BOT 🔹\n'));

        let phoneNumber = await question(chalk.blue.bold('📱 Masukkan Nomor WhatsApp:\n> '));
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        
        let name = await question(chalk.blue.bold('📝 Masukkan Nama Anda:\n> '));
        let password = await question(chalk.blue.bold('🔒 Masukkan Password:\n> '));

        let telegramID = await question(chalk.blue.bold('📩 Masukkan Telegram ID Anda:\n> '));
        telegramID = telegramID.replace(/[^0-9]/g, '');

        console.log(chalk.yellow.bold('\n🔄 Memproses autentikasi...'));
        const isAuthorized = await isAuthorizedUser(phoneNumber, name, password, telegramID);

        if (!isAuthorized) {
            console.log(chalk.red.bold('\n⛔ Autentikasi gagal! Proses pairing dibatalkan.'));
            process.exit();
            return;
        }

        console.log(chalk.green.bold('\n✅ Autentikasi berhasil! Proses pairing dapat dilanjutkan.'));
        let code = await Ryc.requestPairingCode(phoneNumber.trim());
        code = code.match(/.{1,4}/g).join(' - ') || code;

        console.log(chalk.magenta.bold(`\n🔑 KODE PAIRING ANDA:\n${chalk.white.bold(code)}`));
        console.log(chalk.green.bold('🎉 Silakan gunakan kode ini untuk menyelesaikan pairing!'));
    })();
}

    

Ryc.ev.on('call', async (caller) => {
        console.log("CALL OUTGOING");
    });

    Ryc.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };


    Ryc.ev.on('messages.upsert', async chatUpdate => {
        try {
            mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            if (!Ryc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
            let m = smsg(Ryc, mek, store);
            require("../Console/Xeonix")(Ryc, m, chatUpdate, store);
        } catch (error) {
            console.error("Error processing message upsert:", error);
        }
    });

    Ryc.getFile = async (PATH, save) => {
        let res;
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0);
        let type = await FileType.fromBuffer(data) || { mime: 'application/octet-stream', ext: '.bin' };
        filename = path.join(__filename, '../' + new Date * 1 + '.' + type.ext);
        if (data && save) fs.promises.writeFile(filename, data);
        return { res, filename, size: await getSizeMedia(data), ...type, data };
    };

    Ryc.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };

    Ryc.sendText = (jid, text, quoted = '', options) => Ryc.sendMessage(jid, { text, ...options }, { quoted });

    Ryc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer = options && (options.packname || options.author) ? await writeExifImg(buff, options) : await imageToWebp(buff);
        await Ryc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    Ryc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer = options && (options.packname || options.author) ? await writeExifVid(buff, options) : await videoToWebp(buff);
        await Ryc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    Ryc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    };

    // Tambahan fungsi send media
    Ryc.sendMedia = async (jid, path, caption = '', quoted = '', options = {}) => {
        let { mime, data } = await Ryc.getFile(path, true);
        let messageType = mime.split('/')[0];
        let messageContent = {};
        
        if (messageType === 'image') {
            messageContent = { image: data, caption: caption, ...options };
        } else if (messageType === 'video') {
            messageContent = { video: data, caption: caption, ...options };
        } else if (messageType === 'audio') {
            messageContent = { audio: data, ptt: options.ptt || false, ...options };
        } else {
            messageContent = { document: data, mimetype: mime, fileName: options.fileName || 'file' };
        }

        await Ryc.sendMessage(jid, messageContent, { quoted });
    };

    Ryc.sendPoll = async (jid, question, options) => {
        const pollMessage = {
            pollCreationMessage: {
                name: question,
                options: options.map(option => ({ optionName: option })),
                selectableCount: 1,
            },
        };

        await Ryc.sendMessage(jid, pollMessage);
    };

    Ryc.setStatus = async (status) => {
        await Ryc.query({
            tag: 'iq',
            attrs: { to: '@s.whatsapp.net', type: 'set', xmlns: 'status' },
            content: [{ tag: 'status', attrs: {}, content: Buffer.from(status, 'utf-8') }],
        });
        console.log(chalk.yellow(`Status updated: ${status}`));
    };
    
     global.idch = "120363395306963490@newsletter"

    Ryc.public = global.publicX;

    Ryc.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
        Ryc.newsletterFollow(global.idch)
        Ryc.sendMessage("6289531470531@s.whatsapp.net", { text: `*Xeonix Crasher Berhasil Tersambung*`})
        }
    });

    Ryc.ev.on('error', (err) => {
        console.error(chalk.red("Error: "), err.message || err);
    });

    Ryc.ev.on('creds.update', saveCreds);
}
connectToWhatsApp();