// This package is needed to reac the info from .env files
require('dotenv').config();
// This package is needed to handle async errors
require('express-async-errors');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const express = require('express');
const app = express();
const mainRouter = require('./routes/main');

// middleware
app.use(express.json());

app.use('/api/v1/expenselog/', mainRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening at port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();