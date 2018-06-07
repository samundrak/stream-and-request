const SimpleRequest = require('../core/SimpleRequest');
const SimpleStream = require('../core/SimpleStream');
const fs = require('fs');
// const url = 'http://localhost:3001/basic';
const ftpurl = 'ftp://test.rebex.net/readme.txt';

const sr = new SimpleRequest(ftpurl);
// sr.setAuth('samundra', 'samundras'); // local basic
sr.setAuth('demo', 'password'); // for ftp
const stream = sr.get();
const adv = new SimpleStream(stream);

stream.on('error', console.log);
const f = fs.createWriteStream('text.txt');
f.on('error', console.log);
const s = adv.get();
s.pipe(f);
adv.on('finished', console.log);
