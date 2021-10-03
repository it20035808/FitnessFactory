const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.DB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true, 

useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", ()=> {

    console.log("db success");
})

//to access the router
const CPRouter = require("./routes/clientplans.js");
http://localhost:8070/clientplan

//when clientplan local host address get called on, it will load CPRouter
app.use("/clientplan",CPRouter);


app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`);
})

