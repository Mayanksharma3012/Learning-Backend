// require('dotenv').config()
import dotenv from 'dotenv'
import mongoose from "mongoose";
import {DB_NAME} from './constant.js'
import connectDB from "./db/index.js";

dotenv.config({path: './.env'}) 

connectDB();
// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log(error)
//     }
// })()