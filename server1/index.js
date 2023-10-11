const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('server1!\n');
});

const serverPort = 3000; // Port for the backend server
server.listen(serverPort, () => {
  console.log(`server1 ${serverPort}`);
});
