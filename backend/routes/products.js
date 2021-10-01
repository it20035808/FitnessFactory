const router = require("express").Router();
let Product = require("../models/Product");

//Adding the products
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const description = req.body.description;
    const price = Number(req.body.price);

    const newProduct = new Product({
        name,
        category,
        description,
        price
    })

    newProduct.save().then(() => {
        res.json("Product Added")
    }).catch((err) => {
        console.log(err);
    })

})

//Get a list of all the products
router.route("/").get((req, res) => {
    Product.find().then((products) => {
        res.json(products)
    }).catch((err) => {
        console.log(err);
    })
})

//Update a product given the object id
router.route("/update/:id").put(async (req, res) => {
    let productId = req.params.id;
    const {name, category, description, price} = req.body;

    const updateProduct = {
        name,
        category,
        description,
        price
    }

    const update = await Product.findByIdAndUpdate(productId, updateProduct)
    .then(() => {
        res.status(200).send({status: "product updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

//Delete a product given the object id
router.route("/delete/:id").delete(async (req, res) => {
    let productId = req.params.id;

    await Product.findByIdAndDelete(productId)
    .then(() => {
        res.status(200).send({status: "product deleted"});
    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "error with delete user", error: err.message});
    })
})

//Get a specific product given the object id 
router.route("/get/:id").get(async (req, res) => {
    let productId = req.params.id;
    const product = await Product.findById(productId)
    .then((product) => {
       // res.status(200).send({status: "Product fetched", product: product}) 
       //when adding above code with status we can't retrive data to frontend
       res.json(product)

    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "error with fetch product", error: err.message});
    })
})

module.exports = router;