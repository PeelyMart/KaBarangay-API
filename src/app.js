const express = require("express");
const app = express();

app.use("/health", (req,res) => {
  res.json({status:"OK"});
}); 


module.exports = app;
