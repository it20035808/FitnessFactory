const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const productSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    category : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required: true
    }
})

productSchema.plugin(AutoIncrement, { id: 'product_seq', inc_field: 'PID'});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;