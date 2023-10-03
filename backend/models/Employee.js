

import mongoose from "mongoose"

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    } ,
    email: {
        type: String,
        required: true
    } ,
    password: {
        type: String,
        required: true
    },
    
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }
},

{timestamps: true},

)

 export const EmployeeModel = mongoose.model("employee", employeeSchema)


