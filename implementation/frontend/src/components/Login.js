import { FaCashRegister } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import LoginNegativ from "./Service_failed";
import '../components_css/animationToRight.css'
import axios from "axios";

/**
 * Represent the Login of the system
 * @returns {JSX.Element} the login area to identificate hisself
 */
export default function Login(){

    const [user, setUser] = useState([]);
    const[loginFailed, setLoginFailed] = useState(false);
    const[password, setPassword] = useState("");
    const[content_error, setContentError] = useState("");
    const[loading, setLoading] = useState(false);

    const navigate = useNavigate();

    /**
     * handle the input of an user after a click
     * @param e
     */
   const handelInputLogin = (e) => {
        if (!password) {
            setContentError("The input filed doesn't keep empty.");
            setLoginFailed(true);
        }else{
            setLoading(true);
            axios.get(`http://localhost:4000/api/user/${password}`)
                .then((response) => {
                    setUser(response.data);
                    makeUserLogged(response.data._id);
                    setLoading(false)
                })
                .catch((error) => {
                    setContentError("The password is unknown.");
                    setLoginFailed(true);
                })
        }
    }

    /**
     * changed the state of logged from false to true
     * @param id the identification of an user
     */
    const makeUserLogged = async (id) =>{
        try {
            await axios.patch(`http://localhost:4000/api/user/login/changeState/${id}`)
                .then(()=>{
                    handleSuccessfullyLogin();
                })
                .catch((error) => {
                    console.log("Not answer from the server." + error)
                })
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Logged-Attributs:', error);
        }
    }

    /**
     * Check the length of the entered password
     * @param password
     * @returns true if the lenght of the key is enough otherwise false
     */
    const validation_password_length = (password) => {
        return password.toString().length < 10 || password.toString().length > 10
    }

    /**
     * check the first 5 characters of a password
     * @param password
     * @returns true if a password starts with 10000 otherwise false
     */
    const password_contains_a_pattern = (password) => {
        const pattern_10000 = password.substring(0,5);
        return pattern_10000 === "10000";
    }

    /**
     *
     */
    const handleSuccessfullyLogin = () =>{
        navigate(`/cashbox/hauptmenu`);
    }

    /**
     * check a password has only numbers
     * @param password
     * @returns true if the password is only about numbers otherwise false
     */
    const password_contains_only_numbers = (password) => {
        return !isNaN(password);
    }

    setTimeout(() => {
        setLoginFailed(false);
    },4000);

    return (
        <div className="bg-sky-300 h-dvh pt-40">

            <div className="flex flex-col justify-center bg-white w-fit p-10 ml-auto mr-auto rounded-3xl">

                <div className="ml-auto mr-auto pt-5">
                    <FaCashRegister size={80}/>
                </div>

                <div className="w-full h-fit pt-20">

                    <form>
                        <label className="text-base italic">Passwort:</label>
                        <div className="flex flex-row p-2 mt-2 border-2 border-gray-300">
                            <RiLockPasswordLine size={25}/>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="ml-4 focus:outline-none"
                            />
                        </div>
                    </form>

                    <div>
                        <button
                            className="w-full h-fit bg-orange-300 p-2 text-lg mt-3 font-bold hover:rounded-3xl hover:bg-orange-300"
                            onClick={(e) => handelInputLogin(e)}>Login
                        </button>
                    </div>


                </div>

                <div className="mt-5 italic">
                    <p className="text-sm">Du hast noch keinen Account?
                        <Link to='/cashbox/user/registrierung'>
                                <span
                                    className="font-mono underline-offset-2 hover: cursor-pointer"> Registrierung
                                </span>
                        </Link>
                    </p>
                    <p className="text-sm mt-2">Passwort vergessen?
                        <Link to='/cashbox/user/passwordforgot/'>
                            <span className="font-mono underline-offset-2 hover: cursor-pointer"> vergessen</span>
                        </Link>
                    </p>
                </div>

            </div>
            <div>
                {loginFailed && (
                    <div className="componentFromLeftToRight">
                        <LoginNegativ error={content_error}/>
                    </div>
                )}
            </div>
        </div>
    )
}