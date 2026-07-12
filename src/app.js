import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
export const app = express();


app.use(cors()) // Allow websites to access my backend. // no blocked by CORS policy.


app.use(express.json({limit: '30kb'}))
app.use(express.urlencoded())
app.use(express.static('public'))
app.use(cookieParser())
