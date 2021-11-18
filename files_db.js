// const fs = require('fs');

// fs.readFile('./files/text.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data.toString());
// });

// fs.writeFile('./files/text.txt', 'Different text', () => {
//     console.log('File updated');
// });


// if (!fs.existsSync('./Test')) {
//     fs.mkdir('./Test', err => {
//         if (err) {
//             console.log(err);
//         }
    
//         console.log('Folder Created');
//     });
// }

// if (fs.existsSync('./files/text.txt')) {
//     fs.unlink('./files/text.txt', err => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         console.log('Deleted file!');
//     });
// }

const fs = require('fs');

const rs = fs.createReadStream('./files/text1.txt', {encoding: 'utf8'});
const ws = fs.createWriteStream('./files/text2.txt');
let text = ''


// One way to transfer data from one file to another
// readStream.on('data', chunk => {
//     ws.write(chunk);
// });

// Another way is piping
rs.pipe(ws);
