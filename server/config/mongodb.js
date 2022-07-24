const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connnection = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Mongodb Conected")
  } catch (error) {
    console.log(error.massage)
    process.exit(1);
  }
};
module.exports = connectDb;