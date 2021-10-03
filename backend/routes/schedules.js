const express = require('express');

const Schedules = require('../models/schedules');

const router = express.Router();

//save schedules

router.post('/schedule/save' , (req,res)=>{
    let newSchedule = new Schedules(req.body);

    newSchedule.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Schedules saved successfully"
        });
    });
});

//get schedules

router.get('/schedules',(req,res) => {
    Schedules.find().exec((err,schedules) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingSchedules:schedules
        });
     });
});

//get specific post

router.get("/schedule/:id",(req,res) =>{
    let scheduleId =req.params.id;

    Schedules.findById(scheduleId,(err,schedule) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            schedule
        });
    });
});


//update posts

router.put('/schedule/update/:id', (req,res) =>{
    Schedules.findByIdAndUpdate(
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


//delete post

router.delete('/schedule/delete/:id',(req,res) =>{
    Schedules.findByIdAndRemove(req.params.id).exec((err,deletedSchedule) =>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete Sucessfull" ,deletedSchedule
        });
    });
});

module.exports = router;