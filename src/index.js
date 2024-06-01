import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config(
 
    {
        path:'./env'
    }
)
connectDB()

// ;(async function connectDB(){
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log('connected')
    
//   } catch (error) {
//     console.log("error:issue in db connection",error);
//     throw(error)
//   }
// })()