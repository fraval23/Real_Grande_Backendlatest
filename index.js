const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const allrouter = require("./routes/allRoutes");
const app = express();
app.use(express.json());

const cors=require('cors')
// let corsOptions={ origin: "http://localhost:3000"}
app.use(cors())


const db = module.exports =()=>{
  try{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://cluster0.q2s0mbk.mongodb.net/realgrande?retryWrites=true&w=majority', { user: process.env.DBUSERNAME, pass: process.env.DBPASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
    console.log("MongoDB Connection is Successful")
  } catch(error){
    console.log(error);
    console.log("MongoDB Connection is failed")
  } 
}
db();

app.use('/',allrouter);

console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`)
});