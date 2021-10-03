const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientPlanSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    HealthC:{
        type:String,
        required:true
    },
    WoutE:{
        type:String,
        required:true
    },
    Crtg:{
        type:String,
        required:true
    },
    Wtg:{
        type:String,
        required:true
    },
    BMI:{
        type:String,
        required:true
    },
    Dieting:{
        type:String,
        required:true
    }

})

//when we send this schema,we have to give the table name that recieves data

const ClientPlan = mongoose.model("ClientPlan",clientPlanSchema);

module.exports = ClientPlan;