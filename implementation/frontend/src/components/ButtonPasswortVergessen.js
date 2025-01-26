import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";


/**
 * the event if the password was forgotten as a component
 * @param mobile the input from an user
 * @constructor
 */
const ButtonPasswortVergessen = ({ mobile }) => {
    const navigate = useNavigate();
    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');

    let verbindungsart = storedLocalAdress ? storedLocalAdress: storedIpAdress;

    /**
     * handle the proces in case when the user forgot his password
     */
    const handlePasswordForgot = () => {
        if(!mobile){
            alert("Du hast keine Eingabe getätigt.")
            navigate(`/cashbox/user/passwordforgot`)
        }else if(!mobile_contains_only_numbers(mobile)){
            alert("Deine Eingabe ist ungültig.")
            navigate(`/cashbox/user/passwordforgot`)
        }else{
            axios.get(`http://${verbindungsart}:4000/api/user/passwordforgot/${mobile}`)
                .then((response) => {
                    handleServerResponse(response.data.password)
                })
                .catch((response) => {
                    if(response.status === 404){
                        alert("Die angegebene Handynummer ist unbekannt.")
                    }
                })
        }
    }

    /**
     * check a password has only numbers
     * @param mobile
     * @returns true if the password is only about numbers otherwise false
     */
    const mobile_contains_only_numbers = (mobile) => {
        return /^[0-9]+$/.test(mobile);
    }

    /**
     *  print the stored password
     */
    const handleServerResponse = (content) =>{
        alert("Gespeichertes Passwort: " + content);
        navigate(`/cashbox/login`)
    }

    return (
        <div>
            <button
                className="w-full h-fit bg-gray-300 p-2 mt-5 text-base font-bold hover:rounded-3xl hover:bg-green-300"
                onClick={handlePasswordForgot}>
                senden
            </button>
        </div>
    )
}

export default ButtonPasswortVergessen;
