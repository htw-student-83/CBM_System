import { User } from "../modell/userModell.js";
import { isValidObjectId} from "mongoose";

/**
 * Save an new user into the db
 * @param req the data of an new user
 * @param res the message, that the process was successful
 * @returns {Promise<void>}
 */
const createUser =  async (req, res) => {
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
}


/**
 * Get all users from the db
 * @param req not used
 * @param res the stored users in form of json
 * @returns {Promise<void>}
 */
const getUsers = async (req, res) => {
    const user = await User.find({});
    res.status(200).json(user);
}


/**
 * get an user by the password
 * @param req the passwort of a stored user
 * @param res the user with this password
 * @returns {Promise<*>}
 */
const getUserByPassword = async (req, res) => {
    const { password } = req.params
    const user = await User.findOne({password: password});
    if(!user){
        return res.status(404).json({msg: "User not found."});
    }
    res.status(200).json(user);
}

/**
 * Change the data of an stored user
 * @param req new new data
 * @param res not used
 * @returns {Promise<*>}
 */
const getUserByID = async (req, res)=> {
    const { id } = req.params
    if(!isValidObjectId(id)){
        return res.status(400).json({msg: "The User-ID is invalid."});
    }
    const user = await User.findById({_id: id})
    if(!user){
        return res.status(404).json({msg: "Not user found."});
    }
    res.status(200).send(user);
}

/**
 * Change the state to true
 * @param req id
 * @param res
 * @returns {Promise<*>}
 */
const changeUserState = async (req, res)=> {
    const { id } = req.params
    if(!isValidObjectId(id)){
        return res.status(400).json({msg: "The User-ID is invalid."});
    }

    const user = await User.findById({_id: id})
    if(!user){
        return res.status(404).json({msg: "Not user found."});
    }
    try {
        // Benutzerstatus aktualisieren und den aktualisierten Benutzer zurückgeben
        const user = await User.findOneAndUpdate(
            { _id: id }, // Filter
            { logged: true }, // Update
            { new: true } // Option: gibt das aktualisierte Dokument zurück
        );
        // Erfolgreiche Antwort
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error." });
    }
}


/**
 * Change the data of an stored user
 * @param req new new data
 * @param res not used
 * @returns {Promise<*>}
*/
const updateUserData = async (req, res)=> {
    const { id } = req.params
    if(!isValidObjectId(id)){
        return res.status(400).json({msg: "The User-ID is invalid."});
    }

    const user_updated = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!user_updated){
        return res.status(404).json({msg: "Not user found for updating."});
    }
    res.status(204).end();
}

/**
 * delete an stored user out of the db under the condition logged is true
 * @param req nothing
 * @param res nothing message if everything is working otherwise with a message
 * @returns {Promise<*>}
 */
const deleteUser = async (req, res) => {
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
}

/**
 * verification of an user
 * @param req the mobile number from the client
 * @param res the status code from the server
 * @returns {Promise<*>} true if the user is known otherwise false
 */
const checkUser = async (req, res) => {
    const { mobile } = req.params
    const user = await User.findOne({mobile: mobile});
    if(!user){
        return res.status(404).send({message: "Nobody found with this mobile number."});
    }
    return res.status(200).json(user);
}

const checkLocalServer = async (req, res) => {
    return res.sendStatus(200);
}


export default {
    createUser,
    getUsers,
    getUserByPassword,
    updateUserData,
    changeUserState,
    deleteUser,
    checkUser,
    getUserByID,
    checkLocalServer,
}