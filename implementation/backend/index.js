import express from 'express';
import { PORT, mongo_URL } from './configuration.js';
import mongoose from "mongoose";
import { User } from './modell/userModell.js'
const app = express();

app.use(express.json());

//Route to save a new user
app.post('/user', async (req, res) => {
    try {
        if(!req.body.vorname || !req.body.nachname || !req.body.mobile){
            res.status(400).send({message: "You didn't send all data of the new user."})
        }
        const newUser = {
            vorname: req.body.vorname,
            nachname: req.body.nachname,
            mobile: req.body.mobile,
        }
        const user = await User.create(newUser);
        res.status(201).json({msg: "New user added to the DB.", user})
    }catch (error){
        res.status(400).json({msg: error});
    }
})

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