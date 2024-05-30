const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

/** ---------- EXPRESS ROUTE PATHS ---------- **/
const loginRouter = require("./routes/login.router");
const directoryRouter = require('./routes/directory.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/login', loginRouter);
app.use('/api/directory', directoryRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
