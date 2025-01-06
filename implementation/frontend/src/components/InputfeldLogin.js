import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import IconInnerhalbDesInputfeldesLogin from "./IconInnerhalbDesInputfeldesLogin";
import { validationOfNumber, validationOfLength } from "./CheckInputForLogin"

const InputfeldLogin = () => {

    const[password, setPassword] = useState("");
    const navigate = useNavigate();
    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');
    let verbindungsart = storedLocalAdress ? storedLocalAdress : storedIpAdress;

    /**
     * handle the input of an user after a click
     */
    const handelInputLogin = () => {
        if (!password) {
            alert("Du hast kein Passwort eingegeben.");
        }else if(!validationOfNumber(password)){
            alert("Die Eingabe ist ungültig.");
        }else if(validationOfLength(password)){
            alert("Die Eingabe ist zu kurz oder zu lang.");
        }else {
            axios.get(`http://${verbindungsart}:4000/api/user/${password}`)
                .then((response) => {
                    makeUserLogged(response.data._id);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    /**
     * navigate to the hauptmenu with the message of the art of the server connection
     */
    const handleSuccessfullyLogin = () =>{
        navigate(`/cashbox/hauptmenu`, {state: {message: {verbindungsart}}});
    }

    /**
     * changed the state of logged from false to true
     * @param id the identification of an user
     */
    const makeUserLogged = async (id) =>{
        try {
            await axios.patch(`http://${verbindungsart}:4000/api/user/login/changeState/${id}`)
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

        </div>
    )
}

export default InputfeldLogin;
