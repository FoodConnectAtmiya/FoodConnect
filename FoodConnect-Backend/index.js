require('dotenv').configDotenv();
const express = require('express');
const cors = require("cors");
const auth = require("./routes/auth");
const app = express();
const mongoose = require('mongoose');

const mongourl = "mongodb+srv://milangohel07:hiLgT18Uxa12f8Ph@cluster0.2vpd6qb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const mongourl = "mongodb://0.0.0.0:27017/foodconnect"
mongoose.connect(mongourl,{}).then(()=>{
    console.log("connected mongourl successfully");
}).catch((err)=>{console.log(err)})

app.get("/",(req,res)=>{
    res.send("<H1>Welcome to Food Connect</H1>")
});
app.use(cors());
app.use(express.json())
app.use(auth);


app.listen(process.env.PORT , () =>{
    console.log(`server is listening on ${process.env.PORT}`);
})
