import React, {useEffect} from 'react';
import iconHand from '../pictures/winkendeHand.png'
import {useNavigate} from "react-router-dom";

/**
 * The icon, which will be printed when an user could log out successfully
 * @returns {Element}
 * @constructor
 */
const LogoutErfolgreich = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate( '/cashbox/login');
        }, 4000)
    }, [navigate]);


    return (
        <div className="flex flex-col bg-blue-400 h-dvh" id="mainscreen">
            <div className="mt-60 ml-auto mr-auto">
                <img src={iconHand} width={"170"} alt="hand" style={{ marginTop: 8}}/>
            </div>
            <div>
                <h1 className="text-center text-2xl font-bold mt-11">Bis zum nächsten Mal -)</h1>
            </div>
        </div>
    )
}

export default LogoutErfolgreich;
