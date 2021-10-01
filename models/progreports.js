const mongoose = require('mongoose');

const progreportSchema = new mongoose.Schema({

    instructorID:{
        type:Number,
        required:true
    },

    HoursInMonth:{
        type:Number,
        required:true
    },

    HoursWorkedInMonth:{
        type:Number,
        required:true
    }
});
 
module.exports = mongoose.model('Progreports' , progreportSchema); 