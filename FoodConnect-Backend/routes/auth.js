const express = require('express')
const router = express.Router();
const organization = require('../models/Organization');
const Availability = require('../models/Availablity');
const FoodDonor = require('../models/FoodDonor');
const Feedback = require('../models/Feedback');
const Organization = require('../models/Organization');
const multer = require('multer');
const path = require('path')

router.get("/auth",(req,res)=>{
   res.send("hi");
})
const notifyall = async (dt)=>{

}   
router.post("/addOrganization",async (req,res)=>{
   try {
        const {email,phoneNumber,password,address,name,city,pinCode}=req.body;
        await organization.create({email,phone: phoneNumber,password,address,name,city,pinCode});
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
        const dt = await Availability.find({status:'pending', pinCode: { $gte: pincode, $lte: pincode2 },createdAt: { $gte: oneDayBefore }});
        res.json({status:'ok',dt});
    } catch (error) {
        res.status(404).json({status:'error',error});
    }
})

router.put("/acceptRequrst/:rid/:oid",async (req,res)=>{
    try {
        const dt2 = await Availability.findById(req.params.rid);
        if(dt2.status=="pending"){
            const dt = await Availability.findByIdAndUpdate(req.params.rid,{status:"accepted",organization_id:req.params.oid});
            sendMessageToDonor(dt);
            res.sendStatus(200);
        }else{
            res.status(400).json({status:'Request not accepted'});
        }
    } catch (error) {
        res.status(404).json({status:'error',error});
    }
})

router.get("/nearbyDonors/:pinCode",async (req,res)=>{
    try {
        const {pinCode}=req.params;
        let pincode= pinCode % 10 ;
        pincode = pinCode - pincode;
        let pincode2 = pincode+9;
        const dt = await FoodDonor.find({pinCode: { $gte: pincode, $lte: pincode2 }});
        res.status(200).json(dt);
    } catch (error) {
        res.status(404).json({status:'error',error});
    }
})
router.get("/nearbyOrganization/:pincode",async (req,res)=>{
    try {
        const {pinCode}=req.params;
        let pincode= pinCode % 10 ;
        pincode = pinCode - pincode;
        let pincode2 = pincode+9;
        const dt = await Organization.find({pinCode: { $gte: pincode, $lte: pincode2 }});
        res.status(200).json(dt);
    } catch (error) {
        res.status(404).json({status:'error',error});
    }
})

// DONOR SERVICES
router.post("/addDonor",async (req,res)=>{
    try {
        const {email,phoneNumber,password,name,city,address,pinCode} = req.body;
        console.log(req.body)
        await FoodDonor.create({email,phone: phoneNumber,password,name,city,address,pinCode});
        res.sendStatus(200);
    } catch (error) {
        res.status(404).json({status:'error',error});
    }
})
router.post("/loginDonor",async (req,res)=>{
    try {
        const { email, password }=req.body;
        const dt = await FoodDonor.findOne({email,password}).select("-password");
        if(dt.$isEmpty){
            res.status(200).json({dt});
        }else{
            res.status(404).json({Status:"Invalid User name or Password"});
        }
    } catch (error) {
        res.status(404).json({status:'error'});
    }
})
router.post("/addAvailability",async (req,res)=>{
    try {
        const { donor_id,status,people_serve,collection_time, notes,organization_id,pinCode }=req.body;
        const dt = await Availability.create({ donor_id,status,people_serve,collection_time,notes,organization_id,pinCode });
        notifyall(dt);
        res.sendStatus(200);    
    } catch (error) {
        res.status(404).json({status:'error',error});
    }
})
router.get('/getDonorAcceptance/:Did',async (req,res)=>{
    try {
        const {Did}=req.params;
        const oneDayBefore = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const dt = await Availability.find({donor_id:Did,createdAt: {$gte: oneDayBefore}});
        res.status(200).json(dt);
    } catch (error) {
        res.status(404).json({status:'error',error});
    }
})


// FeedBackRequest
router.post('/feedback', async (req, res) => {
  try {
    // Validate the request body against the feedbackSchema
    const { donor_Id, organization_Id, review, rating } = req.body;

    const newFeedback = new Feedback({
      donor_Id,
      organization_Id,
      review,
      rating
    });

    // Perform data validation using Mongoose's built-in validation
    const validationErrors = newFeedback.validateSync();

    if (validationErrors) {
      const errorMessages = Object.values(validationErrors.errors).map(error => error.message);
      return res.status(400).json({ errors: errorMessages });
    }

    // Save the new feedback to the database
    await newFeedback.save();

    res.status(201).json({ message: 'Feedback created successfully!' });
  } catch (error) {
    console.error('Error creating feedback:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/feedback/:did', async (req, res) => {
  try {
    const feedback = await Feedback.find({donor_Id:req.params.did});
    res.status(200).json(feedback);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
let a = 1;

const storage=multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'./images')
    },
    filename: function(req,file,cb){
        cb(null,Date.now());
    }
    
})
  const upload = multer({ storage: storage });

  router.post('/upload', upload.single('screenshot'), async (req, res) => {
    console.log(req.file.path);
    res.send('File uploaded successfully');
  });

module.exports=router;