const fs = require('fs');

const rs = fs.createReadStream('./files/text1.txt', {encoding: 'utf8'});
const ws = fs.createWriteStream('./files/text2.txt');
let text = ''


// One way to transfer data from one file to another
// readStream.on('data', chunk => {
//     ws.write(chunk);
// });

// Piping
rs.pipe(ws);
