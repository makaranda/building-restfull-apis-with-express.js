const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/users", (req, res) => {
  controller.getUsers((req, res, next) => {
    res.send();
  });
});

app.post("/createuser", (req, res) => {
  //   const id = req.query.id;
  //   controller.getUserById(id, (user) => {
  //     res.send(user);
  //   });
  controller.addUser(req.body, (callback) => {
    res.send();
  });
});

app.put("/updateuser", (req, res) => {
  controller.updateUser(req.body, (callback) => {
    res.send(callback);
  });
});

app.delete("/deleteuser", (req, res) => {
  controller.deleteUser(req.body, (callback) => {
    res.send(callback);
  });
});

module.exports = app;
