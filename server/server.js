const express = require('express')
const cors = require("cors");
const dotenv = require("dotenv");
const products = require("./data/Products");
const connectDb = require('./config/mongodb');
const ImportData  = require('./dataSender');

dotenv.config();
connectDb();
const app = express()

// API
app.use("/api/import", ImportData);


app.get('/', (req, res) => {
  res.send('Api running..')
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// const start = async () => {
//   try {
//       await connectDb();
//       app.listen(PORT, () => {
//           console.log(`Server is running on port ${PORT}.`);
//       });
//   } catch (error) {
//       console.log(error);
//       console.log("Failed to connect to the database, server is not running.");
//   }
// };

// start();