import React, {useEffect, useState} from 'react';
import axios from "axios";
import LoginNegativ from "./Service_failed";
import {useLocation, useNavigate} from "react-router-dom";
import IconInnerhalbDesInputfeldesLogin from "./IconInnerhalbDesInputfeldesLogin";

const InputfeldLogin = () => {

    const [user, setUser] = useState([]);
    const[password, setPassword] = useState("");
    const[loading, setLoading] = useState(false);
    const[loginFailed, setLoginFailed] = useState(false);
    const[content_error, setContentError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const [verbindungstyp, setVerbindungstyp] =  useState(() => {
        return sessionStorage.getItem("verbindungstyp") || location.state?.message;
    });

    useEffect(() => {
        if (verbindungstyp) {
            sessionStorage.setItem("verbindungstyp", verbindungstyp);
        }
    }, [verbindungstyp]);

    /**
     * handle the input of an user after a click
     */
    const handelInputLogin = () => {
        if (!password) {
            setContentError("The input filed doesn't keep empty.");
            setLoginFailed(true);
        }else{
            setLoading(true);
            axios.get(`http://${verbindungstyp}:4000/api/user/${password}`)
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
     * check a password has only numbers
     * @param password
     * @returns true if the password is only about numbers otherwise false
     */
    const password_contains_only_numbers = (password) => {
        return !isNaN(password);
    }

    /**
     *
     */
    const handleSuccessfullyLogin = () =>{
        navigate(`/cashbox/hauptmenu`, {state: {message: {verbindungstyp}}});
    }

    /**
     * changed the state of logged from false to true
     * @param id the identification of an user
     */
    const makeUserLogged = async (id) =>{
        try {
            await axios.patch(`http://${verbindungstyp}:4000/api/user/login/changeState/${id}`)
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

    setTimeout(() => {
        setLoginFailed(false);
    },4000);

    return (
        <div>
            <form>
                <div className="flex flex-row mt-2 border-2 border-gray-300">
                    <IconInnerhalbDesInputfeldesLogin/>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="ml-4 focus:outline-none"
                    />
                </div>
            </form>

            <button
                className="w-full h-fit bg-orange-300 p-2 text-base mt-3 font-bold hover:rounded-3xl hover:bg-orange-300"
                onClick={(e) => handelInputLogin(e)}>Login
            </button>

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

export default InputfeldLogin;
