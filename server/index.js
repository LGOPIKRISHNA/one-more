const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const bcrypt = require("bcrypt")
const EmployeeModel = require('./models/Employee')
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/employee')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));//mongodb://localhost:27017/            127.0.0.1:27017
app.post('/register', (req, res) => {  
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json(err))
})

app.post("/login",(req,res)=>{
  const {email,password}=req.body;
  EmployeeModel.findOne({email: email})
  .then(user => {
    if(user){
      if(user.password === password){
        res.json("Success")
      }
      else{
        res.json("password incorrect")
        }
    }
    else{
      res.json("user not found")
    }
  }
)
}
)
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})