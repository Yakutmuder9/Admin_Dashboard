const express = require("express");
const User = require("./models/User.js");
const users = require("./data/users.js");

const SendData = express.Router();

SendData
    .post("/user", async (req, res) => {
        await User.deleteMany({});
        const importUser = await User.insertMany(users);
        res.send({ importUser });
    })

module.exports = SendData;