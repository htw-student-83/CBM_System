import express from 'express';
import net from 'net';
import {PORT, MONGO_URL} from "./config.js";
import mongoose from 'mongoose';
import userRoutes from "../backend/routes/userRoutes.js"
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

//app.use('/api/user/', userRoutes);
app.use('/api', userRoutes);
//app.use('/api/cashbox/', userRoutes);

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to the CBM-System");
})

mongoose
        .connect(MONGO_URL)
        .then(()=>{
            app.listen(PORT, () => {
                console.log(`Server is listening on port ${PORT}`);
            })
            console.log("Connected with the db cash-box-system")
        })
        .catch((error) => {
            console.log(error);
        })

