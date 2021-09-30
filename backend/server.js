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

const URL = process.env.PRODUCT_DB_URL;

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

const productRouter = require("./routes/products.js");
const cartRouter = require("./routes/carts.js");

app.use("/product", productRouter);
app.use("/cart", cartRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})
