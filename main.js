const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { // Callback called every time a request to the server is sent
    console.log(req.url, req.method);
    
    // set header content type
    res.setHeader('Content-Type', 'text/html');
    
    let path = './views/';
    res.statusCode = 200;
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            res.statusCode = 404;
    }


    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data); // When sending one thing data can be passed to end method
        } 
    });
});

const port = 3000;
server.listen(port, 'localhost', () => {
    console.log(`Listening for requests on port ${port}`)
}); 