const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({

    instructorID:{
        type:Number,
        required:true
    },

    days:{
        type:String,
        required:true
    },

    startTime:{
        type:String,
        required:true
    },

    endTime:{
        type:String,
        required:true
    }
});
 
module.exports = mongoose.model('Schedules' , scheduleSchema); 