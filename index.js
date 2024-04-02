//const app = require("./app");
const express = require("express");
const app = express();
const cors = require("cors");

const port = 3001;
const host = "127.0.0.1";

const mongoose = require("mongoose");
const router = require("./router");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://makaranda:882553477v@exampledb.wux2not.mongodb.net/?retryWrites=true&w=majority&appName=exampledb";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to Mongo db");
  } catch (error) {
    console.log("Mongo db error");
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`Server is running on ${server.address().port}`);
});

app.use("/api", router);
