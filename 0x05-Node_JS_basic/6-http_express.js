const express = require('express');
const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!\n');
});

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

module.exports = app;
