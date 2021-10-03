//-------------------------START OF IMPORTS-----------------------------------
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
//dotenv.config(); not needed
//passport-local and related imports
const passport = require("passport");
const passportLocal = require("passport-local");
const cookieParser = require("cookie-parser");
const session = require("express-session");

//-------------------------START OF MIDDELWARE--------------------------------
app.use(express.json()); //app.use(bodyParser.json()) depreciated
app.use(cors());//cors
app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser("secretcode"))
app.use(passport.initialize());//initialise passport
app.use(passport.session());//initialise passport session
require('./passportConfig')(passport);//require passport config file and pass instance of passport
//-------------------------START OF ROUTES------------------------------------
const userRouter = require("./routes/user");
const eventsRouter = require("./routes/posts");
const trackerRouter = require("./routes/trackers");
const productRouter = require("./routes/products");
const progRouter = require("./routes/progreports");
const scheduleRouter = require("./routes/schedules");
const expenseRouter = require("./routes/expenses");
const paymentRouter = require("./routes/payments");
const supplierRouter = require("./routes/suppliers");
const equipmentRouter = require('./routes/equipment');
const stockRouter = require('./routes/stock');

app.use("/user", userRouter);
//hasal
app.use("/events", eventsRouter);
app.use("/tracker", trackerRouter);
//ramith
app.use("/products", productRouter);
//hashani
app.use("/progreport", progRouter);
app.use("/schedules", scheduleRouter);
//ashan
app.use('/expenses', expenseRouter);
app.use('/payment', paymentRouter);
//jayathmi
app.use('/sup', supplierRouter);
//chirath
app.use('/equipment', equipmentRouter);
app.use('/stock', stockRouter);

const URL = process.env.MONGODB_URL;

//-------------------------START OF DB CONNECTIONS----------------------------
mongoose.connect(URL, {
    useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
}).on("error", (err) => {
    console.log(err);
});

//-------------------------START SERVER----------------------------------------
const PORT = process.env.PORT || 8070;

app.listen(PORT, () => {
    console.log('Server up and running on port: ' + PORT)
})