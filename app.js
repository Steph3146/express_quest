require("dotenv").config();

const express = require("express");

const app = express();

const port = 3000; //80

app.get("/api/users", (req, res) => {
  res.send("Users");
});

// app.get("/api/users:id", (req, res) => {
//   res.send("Each User");
// });


const users = require('./api/users');
const database = require('./database');

app.get("/api/users", users.getUsers);
app.get("/api/users/:id", users.getUserById);

app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });