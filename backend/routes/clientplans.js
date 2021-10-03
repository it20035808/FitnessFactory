const router = require("express").Router();
const clientplan = require("../models/clientplan");
//let clientplan = require("../models/clientplan");

//create 
http://localhost:8070/clientplan/add
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const HealthC = req.body.HealthC;
    const WoutE = req.body.WoutE;
    const Crtg = req.body.Crtg;
    const Wtg = req.body.Wtg;
    const BMI = req.body.BMI;
    const Dieting = req.body.Dieting;

    
    const newCP = new clientplan({
        name,
        HealthC,
        WoutE,
        Crtg,
        Wtg,
        BMI,
        Dieting
    })
    newCP.save().then(() => {
        res.json("client plan added")
    }).catch((err) => {
        console.log(err);
    })
})

// should be able to read the added data

http://localhost:8070/clientplan/

router.route("/").get((req, res) => {
    clientplan.find().then((clientplans) => {
        res.json(clientplans)
    }).catch((err) => {
        console.log(err)
    })
})

//updating the clientplan
http://localhost:8070/clientplan/update/
router.route("/update/:id").put(async (req, res) => {
    let userid = req.params.id;
    // using destructure
    const {name,
        HealthC,
        WoutE,
        Crtg,
        Wtg,
        BMI,
        Dieting } = req.body;
    // data has reached by line 38

    const updateCP = {
        name,
        HealthC,
        WoutE,
        Crtg,
        Wtg,
        BMI,
        Dieting
    }
    const update = await clientplan.findByIdAndUpdate(userid, updateCP).then(() => {

        res.status(200).send({ status: "user updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "error with updating the data" });
    })
})

http://localhost:8070/clientplan/delete/

router.route("/delete/:id").delete(async (req, res) => {
    let userid = req.params.id;

    await clientplan.findByIdAndDelete(userid)
        .then(() => {
            res.status(200).send({ status: "user deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "error with delete", error: er.message });
        })
})


//get data from only one clinet plan

module.exports = router;