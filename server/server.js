const express = require('express')
const cors = require("cors");
const dotenv = require("dotenv");
const products = require("./data/Products");
const connectDb = require('./mongoConect/mongodb');
const SendData = require('./dataSender');
const { errorHandler, notFound } =require("./Middleware/Errors.js");
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";

dotenv.config();
connectDb();
const app = express()

// API
app.use("/api/import", SendData);

app.get('/', (req, res) => {
  res.send('Api running..')
})

const PORT = process.env.PORT || 8000;

const start = () => {
  try {
     app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.log(error);
    console.log("Failed to connect to the database, server is not running.");
  }
};

setTimeout(() => start(),100);
