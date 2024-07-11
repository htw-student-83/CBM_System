import { Users } from "../modell/userModell.js";

const createUser = async (req, res) => {
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
        const user = await Users.create(newUser);
        res.status(201).json({msg: "New user added to the DB.", user})
    }catch (error){
        res.status(400).json({msg: error});
    }
}

module.exports = {
    createUser
}