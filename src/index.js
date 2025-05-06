const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const users = [];
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

// Get registered users
app.get('/users', (req, res) => {
  return res.json({users})
})

// Register a new user
app.post('/user', (req, res) => {
  const newuserId = req.body.userId;
  if (!newuserId) {
    return res.status(400).send('User ID is required');
  }

  if (users.includes(newuserId)) {
    return res.status(400).send('User ID already exists');
  }
  users.push(newuserId);

  return res.status(201).send(`User ${newuserId} registered successfully`);
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
