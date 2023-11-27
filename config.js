global.owner = ['6281395861695']  //silahkan ganti dengan nomor mu
global.mods = ['6281395861695']   //silahkan gnti dengan nomor mu
global.prems = ['6281395861695'] //silahkan ganti dengan nomor mu
global.nameowner = 'Tio'
global.numberowner = '6281395861695' //silahkan ganti dengan nomor mu
global.mail = 'support@tioprm.my.id' //bebas mau di ubah apa gak
global.gc = 'https://chat.whatsapp.com/Ln2vHjRrRayAbzalRMB56r'   //ubah pake link group mu kalo ada
global.instagram = 'https://instagram.com/prm2.0'   //bebasmau di ubah atau gak
global.wm = '© Tio'  //ubah pake nama mu juga bisa
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'   //ubah pake namamu juga bisa
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
