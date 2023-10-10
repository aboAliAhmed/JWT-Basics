const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
require('express-async-errors');

const app = express();

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(DB, {
    // .connect(process.env.DATABASE_LOCAL, { // for connecting the local database
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con);
    console.log('DB connection successful!');
  });

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
