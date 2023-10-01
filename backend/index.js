import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import {EmployeeModel} from "./models/Employee.js"


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://0.0.0.0:27017/employee").then(()=>{
    console.log("database has been connected successfuly")
}).catch((error)=>{
    console.log(error)
})

app.post("/login", (req, res) =>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
        if(user) {
            if(user.password === password){
                res.json("success")
            }else{
                res.json("the password is incorect")
            }
        } else{
            res.json("no record existed")
        }
    })
})


app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(error => res.json(error))
})





app.listen(3001, () => {
    console.log("server is runing");
})