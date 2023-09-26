//#region Imports
const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
admin.initializeApp();
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
const mongoose = require("mongoose");
require("dotenv").config();
//#endregion

//test upload
const formidable = require ("formidable-serverless");
const { s3Upload } = require("./util/s3Service");
//end test upload

// Import your route handlers
const userRouter = require('./src/Routes/user.routes');
const productRouter = require('./src/Routes/product.routes');
const bookingRouter = require('./src/Routes/booking.routes');
const workProgressRouter = require('./src/Routes/workprogress.routes');
const dashboardRouter = require("./src/Routes/dahboard.routes");

// Mount Routes
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/booking', bookingRouter);
app.use('/work', workProgressRouter);
app.use("/dashboard", dashboardRouter);

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASSWORD;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_ID = process.env.MONGO_ID;

// Connect to database
mongoose
  .connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_DB}.${MONGO_ID}.mongodb.net`
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

exports.server = functions.https.onRequest(app);
