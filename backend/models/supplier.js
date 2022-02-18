const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    supplierId : {
        type : String,
        required: true
    },
    supplierName : {
        type : String,
        required: true
    },
        address : {
        type : String,
        required: true
    },
    phoneNumber : {
        type : Number,
        required: true
    },
    email : {
        type : String,
        required: true
    },

    orderId : {
        type : Number,
        required: true
    },

    productDescription : {
        type : String,
        required: true
    },

    unitCost : {
        type : Number,
        required: true
    },

    quantity : {
        type : Number,
        required: true
    },

    totalAmount : {
        type : Number,
        required: true
    },

})

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;