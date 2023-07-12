const express = require("express");
const { connection } = require("./src/Configs/db");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json())
app.use(
    cors({
        origin: true,
    })
);

const port = process.env.REACT_APP_PORT || 3000;

app.listen(port, async () => {
    try {
        await connection;
        console.log(`Successfully connected to DB`);
    } catch (error) {
        console.log(`Error while connecting DB : ${error}`);
    }
    console.log(`Server is running on ${port}`);
})