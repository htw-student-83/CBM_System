import express from 'express';
import useController from "../controller/userController.js"

const router = express.Router();
const {createUser, getUsers, getUserByPassword, getUserDetails, getUserPassword, updateUserData,
    changeUserStateToTrue,changeUserStateToFalse, checkUser, deleteUser, checkLocalServer, checkTCPServer } = useController;

//Route to save a new user
router.post('/newuser', createUser);

//Route to get all user
router.get('/', getUsers);

//Route to get an user by the password
router.get('/:password', getUserByPassword);

//Route to get an user by the password
router.get('/userdetails/profil', getUserDetails);

//Route to get the stored password of logged user
router.get('/passwordforgot/:mobile', getUserPassword);

//Route to get an user by the password
router.patch('/change/profil', updateUserData);

//Route to change the state of true
router.patch('/login/changeState/:id', changeUserStateToTrue);

//Route to change the state of false
router.patch('/logout/changeState', changeUserStateToFalse);

//Route to check a stored user
router.get('/check/:mobile', checkUser);

//Route to delete an user
router.delete('/', deleteUser);

/*

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

 */

export default router

