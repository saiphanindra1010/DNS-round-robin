const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('server2\n');
});

const serverPort = 3001; // Port for the backend server
server.listen(serverPort, () => {
  console.log(`server2 ${serverPort}`);
});
