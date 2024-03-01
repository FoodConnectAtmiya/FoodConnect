const express = require('express')
const router = express.Router();
const organization = require('../models/Organization');
const Availability = require('../models/Availablity');
const Availablity = require('../models/Availablity');

router.get("/auth",(req,res)=>{
   res.send("hi");
})
const notifyall = async (dt)=>{

}   
router.post("/addOrganization",async (req,res)=>{
   try {
        const {email,phone,password,address,acceptance_status,name,city,pinCode,min_serveble,max_distance}=req.body;
        await organization.create({name,pinCode,email,phone,password,address,acceptance_status,city,min_serveble,max_distance});
        res.sendStatus(200);
   } catch (error) {
        res.status(404).json({status:'error',error});
   }
})
router.post("/loginOrganization",async (req,res)=>{
    try {
        const { email, password }=req.body;
        const dt = await organization.findOne({email,password}).select("-password");
        if(dt.$isEmpty){
            res.status(200).json({dt});
        }else{
            res.status(404).json({Status:"Invalid User name or Password"});
        }
    } catch (error) {
        res.status(404).json({status:'error'});
    }
})

router.get("/getNotification/:oid",async (req,res)=>{
    try {
        const Od = await organization.findOne({ email:req.params.oid });
        // console.log(Od);
        let pincode= Od.pinCode % 10 ;
        pincode = Od.pinCode - pincode;
        let pincode2 = pincode+9;
        // console.log(pincode+" "+pincode2);
        const oneDayBefore = new Date(Date.now() - 6 * 60 * 60 * 1000);
        const dt = await Availability.find({ pinCode: { $gte: pincode, $lte: pincode2 },createdAt: { $gte: oneDayBefore }});
        res.json({status:'ok',dt});
    } catch (error) {
        res.status(404).json({status:'error',error});
    }
})

router.post("/addAvailability",async (req,res)=>{
    try {
        const { donor_id,status,people_serve,collection_time, notes,organization_id,pinCode }=req.body;
        const dt = await Availablity.create({ donor_id,status,people_serve,collection_time,notes,organization_id,pinCode });
        notifyall(dt);
        res.sendStatus(200);    
    } catch (error) {
        res.status(404).json({status:'error',error});
    }
})

router.post("/addDonor",async (req,res)=>{
    const {} = req.body;
})

module.exports=router;