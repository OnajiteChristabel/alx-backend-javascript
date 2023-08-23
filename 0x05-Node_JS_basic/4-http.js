const http = require('http');

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!\n');
});

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;
