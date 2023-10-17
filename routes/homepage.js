//route for logged in user: "/"

const express = require('express');
const app = express();
const port = 8080;

app.get('/login', (req, res) => {
  res.send("Welcome");
});

app.post('/login', (req, res) => {
  res.redirect('/home');
});
