const router = require("express").Router();
let Supplier = require("../models/supplier");



router.route("/add").post((req, res) => {

    const supplierId = Number(req.body.supplierId);
    const supplierName = req.body.supplierName;
    const address = req.body.address;
    const phoneNumber = Number(req.body.phoneNumber);
    const email = req.body.email;
    const orderId = Number(req.body.orderId);
    const productDescription = req.body.productDescription;
    const unitCost = Number(req.body.unitCost);
    const quantity = Number(req.body.quantity);
    const totalAmount = Number(req.body.totalAmount);

    const newSupplier = new Supplier({
        supplierId,
        supplierName,
        address,
        phoneNumber,
        email,
        orderId,
        productDescription,
        unitCost,
        quantity,
        totalAmount
    })

    newSupplier.save().then(() => {
        res.json("Supplier Added")
    }).catch((err) => {
        console.log(err);
    })

})


router.route("/").get((req, res) => {
    Supplier.find().then((suppliers) => {
        res.json(suppliers)
    }).catch((err) => {
        console.log(err);
    })
})


router.route("/update/:id").put(async (req, res) => {
    let supplierID = req.params.id;
    const {supplierId, supplierName, phoneNumber, address, email, orderId,productDescription, unitCost, quantity, totalAmount} = req.body;

    const updateSupplier = {
        supplierId,
        supplierName,
        address,
        phoneNumber,
        email,
        orderId,
        productDescription,
        unitCost,
        quantity,
        totalAmount
        
    }
    

    const update = await Supplier.findByIdAndUpdate(supplierID, updateSupplier)
    .then(() => {
        res.status(200).send({status: "Supplier updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})


router.route("/delete/:id").delete(async (req, res) => {
    let supplierID = req.params.id;

    await Supplier.findByIdAndDelete(supplierID)
    .then(() => {
        res.status(200).send({status: "supplier deleted"});
    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let supplierID = req.params.id;
    const supplier = await Supplier.findById(supplierID)
    .then((supplier) => {
        res.status(200).send({status: "Supplier fetched", supplier: supplier})

    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "error with fetch supplier", error: err.message});
    })
})

module.exports = router;