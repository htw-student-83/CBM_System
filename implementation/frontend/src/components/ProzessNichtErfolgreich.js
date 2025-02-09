import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import { PiWarningOctagonFill } from "react-icons/pi";

/**
 * This component will be printed if a process (payment, payout or data changing) was failed
 * @returns {React.JSX.Element|null}
 * @constructor
 */
const ProzessNichtErfolgreich = () => {

    const [showMessage, setShowMessage] = useState(true);
    const navigate = useNavigate();

    let server_message = "";

    const betragIstZuGross = sessionStorage.getItem("Betrag nicht vorhanden");
    const keinBetrag = sessionStorage.getItem("Kasse leer");

    if(betragIstZuGross){
        server_message = betragIstZuGross;
    }else{
        server_message = keinBetrag;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
            sessionStorage.removeItem("Betrag nicht vorhanden");
            sessionStorage.removeItem("Kasse leer");
            navigate('/cashbox/auszahlung');
        } , 4000);
        return () => clearTimeout(timer);
    }, [navigate])

    if (!showMessage) {
        return null; // Verstecke die Komponente nach der Verzögerung
    }

    return (
        <div className="flex flex-col bg-blue-400 h-dvh" id="mainscreen">
            <div className="mt-44">
                <div className="w-96 mt-28 ml-auto mr-auto mb-10">
                    <PiWarningOctagonFill style={{color: "rgba(184,43,17,0.93)", width: '150px', height: '150px', marginLeft: "130px"}}
                         alt="Geld einzahlen"/>
                </div>
                <div className="text-lg w-fit ml-auto mr-auto mt-30">
                    <div className="p-1 py-2 text-center text-2xl font-bold ml-auto mr-auto mt-5">
                        {server_message}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProzessNichtErfolgreich;
