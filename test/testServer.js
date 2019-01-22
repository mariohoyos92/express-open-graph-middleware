const express = require("express");
const app = express();
const detectOpenGraphRobotMiddleWare = require("../index");

app.get("/", detectOpenGraphRobotMiddleWare, (req, res) => {
  const { isOpenGraphRobot, openGraphRobotType } = req;
  res.status(200).json({ isOpenGraphRobot, openGraphRobotType });
});

module.exports = app;
