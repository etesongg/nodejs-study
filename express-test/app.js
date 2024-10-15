const express = require("express");
const app = express();

const token = "dljsatkj";
const checkAuth = (req, res, next) => {
  console.log("she has admin permission");
  next();
};

const checkToken = (req, res, next) => {
  if (token) {
    console.log("you have token");
    next();
  } else {
    console.log("you don't have token");
  }
};

const getUser = (req, res) => {
  console.log("here is user info");
  res.send("here is user info");
};

app.get("/users", checkAuth, checkToken, getUser); // 차례로 실행됨
// she has admin permission
// you have token
// here is user info

app.listen(5001, () => {
  console.log(`server is on 5001`);
});
