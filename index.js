require("dotenv").config();

const express = require('express');
const app = express();
const {studentRouter} = require("./routes.js")

app.use(express.json());

app.use("/api", studentRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`API live on port ${PORT}`)
});
