const express = require('express');
const app = require('./app');

app.get('/users', (req, res) => {
  // logic to retrieve data
  res.send(users);
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});
