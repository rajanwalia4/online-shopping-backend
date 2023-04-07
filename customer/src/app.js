const express = require("express");
const cors = require("cors");

module.exports = async (app) => {
  app.use(express.json());
  app.use(cors());
  app.use(express.static(__dirname + "/public"));
  app.get("/", (req, res) => {
    res.send("Hello World from customer service!");
  });
};
