const router = require("express").Router();
let Cart = require("../models/Cart");

//Add to cart
router.route("/add").post((req, res) => {
    const cart_id = req.params.id;
    const name = req.body.name;
    const product_id = req.body.product_id;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const newCart = new Cart({
        cart_id,
        name,
        product_id,
        price,
        quantity
    })

    newCart.save().then(() => {
        res.json("Added to the cart")
    }).catch((err) => {
        console.log(err);
    })
    
})

//show the cart
router.route("/").get((req, res) => {
    Cart.find().then((carts) => {
        res.json(carts)
    }).catch((err) => {
        console.log(err);
    })
})

//update the cart
router.route("/update/:id").put(async (req, res) => {
    let cartID = req.params.id;
    const {cart_id, name, product_id, price, quantity} = req.body;

    const updateCart = {
        cart_id,
        name,
        product_id,
        price,
        quantity
    }

    const update = await Cart.findByIdAndUpdate(cartID, updateCart)
    .then(() => {
        res.status(200).send({status: "Cart updated successfully"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating the cart", error: err.message});
    })
})


//Delete something from cart
router.route("/delete/:id").delete(async (req, res) => {
    let cartID = req.params.id;

    await Cart.findByIdAndDelete(cartID)
    .then(() => {
        res.status(200).send({status: "Iten deleted from cart"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with deleting the item", error: err.message});
    })
})

module.exports = router;