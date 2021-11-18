const http = require('http');

const server = http.createServer((req, res) => { // Callback called every time a request to the server is sent
    console.log('request made');
});

const port = 3000;
server.listen(port, 'localhost', () => {
    console.log(`Listening for requests on port ${port}`)
}); 