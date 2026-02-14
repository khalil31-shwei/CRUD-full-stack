const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;  
const users = require ("./db")
app.use(cors());
app.use(express.json());



app.get('/users', (req, res) => {
  res.json(users);
});

app.post("/API/db", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: "User added successfully", user: newUser });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});