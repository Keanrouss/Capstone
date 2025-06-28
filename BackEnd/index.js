import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';

const app = express()
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URL) //added after adding the env isolation method.
console.log("connected")


app.listen(3000, () => {
        console.log(`Listening on port http://localhost:${3000}`);
    })

