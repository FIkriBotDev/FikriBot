//console.log('Starting to run arietube...')
const moment = require("moment-timezone");
const time = moment.tz('Asia/Jakarta').format("HH:mm:ss");
const cluster = require('cluster');
const path = require('path');
const fs = require('fs');
const { color } = require('./lib/color');
const CFonts = require('cfonts');
const Readline = require('readline');
const yargs = require('yargs/yargs');
const http = require("http");   // For replit user
const rl = Readline.createInterface(process.stdin, process.stdout);

console.log(color(time,"white"),color("[STATUS]","green"),color("Connecting...","aqua"));

let date = new Date();

let hariArr = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
let bulanArr = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

let tahun = date.getFullYear();
var bulan = bulanArr[date.getMonth()];
var hari = hariArr[date.getDay()];

var tanggal = date.getDate();
var jams = date.getHours();


// Append 0 in front of minutes and seconds
let now = {
  menit: date.getMinutes().toString().padStart(2, "0"),
  detik: date.getSeconds().toString().padStart(2, "0"),
  jam:   date.getHours().toString().padStart(2, "0"),
}

 switch(true) {
  case jams < 3: 
    jams = "Malam";
    break;
  case jams < 11:
    jams = "Pagi";
    break;
  case jams < 15: 
    jams = "Siang";
    break;
  case jams < 18:
    jams = "Sore";
    break;
  case jams <= 23:
    jams = "Malam";
    break;
}

var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu =  "Jam : " + jamNow + " " + menitNow + " " + detikNow;
var tampilHari = "" + jams + " Hari";

console.log(color(tampilTanggal, "pink"));
console.log(color(tampilWaktu, "pink"));
console.log(color(tampilHari, "pink"));

CFonts.say('Welcome\nFikriBot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`FikriBot By FikriDeveloper || IrfanBotDev`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`FikriBot`, {
  font: 'simple3d',
  align: 'center',
  gradient: ['red', 'magenta']
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
/*  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })*/
  cluster.setupMaster({
    exec: path.join(__dirname, file),
    args: args.slice(1),
  })
  let p = cluster.fork()
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
}

start('main.js');

let startTime = Date.now();

http.createServer((req, res) => {
  let uptime = Math.floor((Date.now() - startTime) / 1000);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Bot Status: Online\nRuntime: ${uptime} seconds`);
}).listen(8080);
