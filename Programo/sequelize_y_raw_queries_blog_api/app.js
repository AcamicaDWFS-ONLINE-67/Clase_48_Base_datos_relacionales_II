const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./server/config/db.js');
const env = require('./server/config/env');
const apiRouter = require('./routes/api');

const app = express();
const PORT = env.PORT;

app.use(morgan('combined'));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header('Content-Type', 'application/json');
//   next();
// });

app.use("/", apiRouter);

app.listen(PORT, () => {
  console.log('Express listening on port:', PORT);
});
