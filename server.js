const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
//yoyo commit to git bro
//import routes
const scheduleRoutes = require('./routes/schedules');
const progreportRoutes = require('./routes/progreports');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(scheduleRoutes);
app.use(progreportRoutes);

const PORT = 8000; 
const DB_URL = 'mongodb+srv://mandi2:mandi23@instructorsmanage.ufsaq.mongodb.net/InstructorsManage?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('Mongoo Database connected successfully!');
})
.catch((err) => console.log('DB connection error', err));

app.listen(PORT, () => {
    console.log(`App is up and running on port number ${PORT}`);
});