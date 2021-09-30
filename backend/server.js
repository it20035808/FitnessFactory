const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const URL = process.env.SUPPLIER_DB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
})

const supplierRouter = require("./routes/suppliers.js");



app.use("/supplier", supplierRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})
