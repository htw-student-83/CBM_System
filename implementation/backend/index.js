import express from 'express';
import { PORT, mongo_URL } from './configuration.js';
import mongoose from "mongoose";
import { User } from './modell/userModell.js'

const app = express();

app.use(express.json());

//Route to save a new user
app.post('/user', async (req, res) => {
    try {
        if(!req.body.vorname || !req.body.nachname || !req.body.mobile  || !req.body.password  || !req.body.logged){
            res.status(400).send({message: "You didn't send all data of the new user."})
        }
        const newUser = {
            vorname: req.body.vorname,
            nachname: req.body.nachname,
            mobile: req.body.mobile,
            password: req.body.password,
            logged: req.body.logged,
        }
        const user = await User.create(newUser);
        res.status(201).json({msg: "New user added to the DB.", user})
    }catch (error){
        res.status(400).json({msg: error});
    }
})


//Route to get all user
app.get('/user', async (req, res) => {
    const user = await User.find({});
    res.status(200).json(user);
})


//Route to get an user by the password
app.get('/user/:password', async (req, res) => {
    const {password} = req.params
    const user = await User.findOne({password: password});
    if(!user){
        return res.status(404).json({msg: "User not found."});
    }
    res.status(200).json(user);
})

//Route to delete an user
app.delete('/user', async (req, res) => {

    try {
        const user = await User.findOne({ logged: true });
        const user_deleted = await User.findOneAndDelete({_id: user.id});
        if(!user_deleted){
            return res.status(404).json({msg: "Not user found for deleting."});
        }
        return res.status(204).end();
    }catch (error){
        return res.status(404).json({msg: "Nobody found."});
    }

})

//Route to change the data of an user
app.patch('/user/:id', async (req, res) => {
    const { id } = req.params
    const user_updated = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!user_updated){
        return res.status(404).json({msg: "Not user found for updating."});
    }
    res.status(204).end();
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