// require('dotenv').config()
import dotenv from 'dotenv'
import mongoose from "mongoose";
import {DB_NAME} from './constant.js'
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({path: './.env'}) 

const port = process.env.PORT || 3000;
connectDB()
.then(() => {
  app.listen(port ,() => {
    console.log(`Example app listening on port ${port}`)
    }  
    )
})
.catch(err, () => {
  console.log('the error in MONGODB is:', err)
}
)
// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log(error)
//     }
// })()