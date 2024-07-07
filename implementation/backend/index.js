import express from 'express';
import { PORT, mongo_URL } from './configuration.js';
import mongoose from "mongoose";
const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to the CBM-System");
})

mongoose
    .connect(mongo_URL)
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        })
        console.log("Connected with the db cash-box-system")
    })
    .catch((error) => {
        console.log(error);
    })