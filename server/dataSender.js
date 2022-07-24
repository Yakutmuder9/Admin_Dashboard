const express = require("express");
const User = require("./models/User.js");
const users = require("./data/users.js");

const ImportData = express.Router();

ImportData.post("./user", async (res,req) => {
    await User.remove({});
        const importUser = await User.insertMany(users);
        res.send({ importUser});

})

module.exports = ImportData;