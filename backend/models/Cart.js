const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({

    cart_id : {
        type : mongoose.Schema.Types.ObjectId
        
    },
    name : {
        type : String,
        required: true
    },
    product_id : {
        type : mongoose.Schema.Types.ObjectId, ref: 'Product'
        
    },
    price : {
        type : Number,
        required: true
    },
    quantity : {
        type : Number,
        required : true
    }
    
})


const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;