// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
import connectDB from './db/index.js';

dotenv.config({
    path: './env',
})

connectDB()















/*import express from 'express';

const app = express();

(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error", () =>{
        console.log("error", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        comsole.log(`App is running on server ${process.env.PORT}`);
       })
    } catch (error) {
        console.error(error);
        throw error;
    }
})*/