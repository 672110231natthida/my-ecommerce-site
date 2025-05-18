// backend/apiServer.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});
