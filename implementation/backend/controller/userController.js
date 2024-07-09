const User = require('../modell/userModell.js')

/**
 * Save an new user
 * @param req data of a new user from the client
 * @param res status code 201 if the user was stored in the db otherwise 400
 * @returns {Promise<void>}
 */
const newUser = async (req, res) => {
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
 * //Get all users from the DB
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUsers = async (req, res) => {
    const user = await User.find({});
    res.status(200).json(user);
}


/**
 * Get the user in dependent of the pasword
 * @param req the password from the client
 * @param res status code 200 if the user was found otherweise 404
 * @returns {Promise<*>}
 */
const getUser = async (req, res) => {
    const {password} = req.params
    const user = await User.findOne({password: password});
    if(!user){
        return res.status(404).json({msg: "User not found."});
    }
    res.status(200).json(user);
}


/**
 * Change the data of an user
 * @param req the id and the rest of all data from the client
 * @param res 204 if the data was changed otherwise 404.
 * @returns {Promise<*>}
 */
const changeData_of_user = async (req, res) => {
    const { id } = req.params
    const user_updated = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!user_updated){
        return res.status(404).json({msg: "Not user found for updating."});
    }
    res.status(204).end();
}


/**
 * Delete an user
 * @param req the id from the client
 * @param res the status code 204 if the user is deleted otherwise 404
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

module.exports = {
    newUser,
    getUsers,
    getUser,
    changeData_of_user,
    deleteUser,
}

