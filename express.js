const express = require('express');

const app = express();
const port = 8199;

app.get('/users', (req, res) => {
  const users = [
    {id: 1, old: 1},
    {id: 2, old: 2},
    {id: 3, old: 3},
    {id: 4, old: 4}
  ];

  res.send(users);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});