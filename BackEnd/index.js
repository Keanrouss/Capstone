import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import connection from "./db.js";
import Favorite from "./models/favorites.js";
import cors from "cors"
import userRouter from './routes/user.js';

const app = express()
const PORT = process.env.PORT

app.use(cors());// cors had to be install to connect the front/back together
app.use(express.json());//json route
app.use('/api/users', userRouter)

mongoose.connect(process.env.MONGO_URL) //added after adding the env isolation method.
console.log("connected")


app.listen(8080, () => {
        console.log(`Listening on port http://localhost:${8080}`);
    })


