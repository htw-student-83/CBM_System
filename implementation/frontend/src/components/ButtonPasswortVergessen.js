import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Services_Fail from "./Service_failed";

const ButtonPasswortVergessen = ({ mobile }) => {

    const[processFailed, setprocessFailed] = useState(false);
    const[error, setError] = useState("");
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
        }else {
            axios.get(`http://${verbindungsart}:4000/api/user/passwordforgot/${mobile}`)
                .then((response) => {
                    handleServerResponse(response.data.password)
                })
                .catch((error) => {
                    handleFailedProcess(error)
                })
        }
    }

    /**
     * check a password has only numbers
     * @param password
     * @returns true if the password is only about numbers otherwise false
     */
    const mobile_contains_only_numbers = (mobile) => {
        return !isNaN(mobile);
    }

    /**
     *  print the stored password
     */
    const handleServerResponse = (content) =>{
        alert("Gespeichertes Passwort: " + content);
        navigate(`/cashbox/login`)
    }

    /**
     * print a message if the process was failed
     * @param content the message
     */
    const handleFailedProcess = (content) =>{
        setprocessFailed(true);
        setError(content)
        setTimeout(() => {
            setprocessFailed(false);
        }, 3000)
    }

    return (
        <div>
            <button
                className="w-full h-fit bg-gray-300 p-2 mt-5 text-base font-bold hover:rounded-3xl hover:bg-green-300"
                onClick={handlePasswordForgot}>
                senden
            </button>

            <div>
                {processFailed && (
                    <div className="componentFromLeftToRight">
                        <Services_Fail error={error}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ButtonPasswortVergessen;
