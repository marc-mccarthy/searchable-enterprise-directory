const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5001;

const directoryRouter = require("./routes/directory.router");
const loginRouter = require("./routes/login.router");

app.use(express.json());
app.use("/api/directory", directoryRouter);
app.use("/api/login", loginRouter);
app.use(express.static("build"));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
