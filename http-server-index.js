const http = require('http');
const users= [{name:'Платоша',age:'18'},{name:'user2',age:'12'}]
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  res.end(JSON.stringify(users.length));

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});