const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { envVars: env } = require("./config/EnvConfig");

const port = env.PORT;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
