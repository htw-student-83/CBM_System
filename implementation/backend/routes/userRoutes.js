import express from "express";
import { Users } from "../modell/userModell.js";
import twilio from 'twilio';
const { createUser } = require('../controller/userController.js');
const router = express.Router();

//const irgendetwas = "KLLFQCQ3L935E6MZV5WWCR4H";
const accountSid = 'ACc1c65c753d9cd9297249c5164146f73f';
const authToken = '9812377579d9c2f611df5183fae56a9e';
const twilioServer = new twilio(accountSid, authToken);

//Route to save a new user
router.post('/', async (req, res) => {

});

router.post('/', createUser);

//Route to get all user
router.get('/', async (req, res) => {
    const user = await Users.find({});
    res.status(200).json(user);
})

//Route to get an user by the password
router.get('/:password', async (req, res) => {
    const {password} = req.params
    const user = await Users.findOne({password: password});
    if(!user){
        return res.status(404).json({msg: "User not found."});
    }
    res.status(200).json(user);
})

//Route to delete an user
router.delete('/', async (req, res) => {
    try {
        const user = await Users.findOne({ logged: true });
        const user_deleted = await Users.findOneAndDelete({_id: user.id});
        if(!user_deleted){
            return res.status(404).json({msg: "Not user found for deleting."});
        }
        return res.status(204).end();
    }catch (error){
        return res.status(404).json({msg: "Nobody found."});
    }
})

//Route to change the data of an user
router.patch('/:id', async (req, res) => {
    const { id } = req.params
    const user_updated = await Users.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!user_updated){
        return res.status(404).json({msg: "Not user found for updating."});
    }
    res.status(204).end();
})

router.get('/', async (req, res) => {
    const { mobile } = req.params
    const user = await Users.findOne({mobile: mobile});

    var mobileNumber = "01794618215";
    var wmessage = `Herzlich Willkommen! ${user.vorname} ${user.nachname}, dein Zugang für die CashBox lautet ${user.password}. 
    Damit kannst du ab sofort deine Zahlungsein- und ausgänge verwalten. `;
    var greeding = "Grüße, dein Controller";

    twilioServer.messages.create({
        body: `${wmessage}${greeding}`,
        to: `+49${mobileNumber}`, // Replace with the recipient's phone number
        from: `+14422010933` // Use your Twilio phone number here
    })
        .then(() =>{
            return res.status(204).end();
        })
        .catch(error => console.error("Twilioerror: " + error));
})

//Route to check an user
router.get('/:mobile', async (req, res) => {
    const { mobile } = req.params
    const user = await Users.findOne({mobile: mobile});

    if(!user){
        return res.status(404).end();
    }

    return res.status(200).end();
})


export default router;