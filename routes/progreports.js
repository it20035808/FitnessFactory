const express = require('express');

const Progreports = require('../models/progreports');

const router = express.Router();

//save progreport

router.post('/progreport/save' , (req,res)=>{
    let newProgreport = new Progreports(req.body);

    newProgreport.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Progreports saved successfully"
        });
    });
});

//get progreports

router.get('/progreports',(req,res) => {
    Progreports.find().exec((err,progreports) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProgreports:progreports
        });
     });
});

//get specific progreport

router.get("/progreport/:id",(req,res) =>{
    let progreportId =req.params.id;

    Progreports.findById(progreportId,(err,progreport) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            progreport
        });
    });
});


//update progreports

router.put('/progreport/update/:id', (req,res) =>{
    Progreports.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


//delete progreport

router.delete('/progreport/delete/:id',(req,res) =>{
    Progreports.findByIdAndRemove(req.params.id).exec((err,deletedProgreport) =>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete Sucessfull" ,deletedProgreport
        });
    });
});

module.exports = router;