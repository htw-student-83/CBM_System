import React, {useState} from 'react';
import IconEinzahlungErfolgreich from "../pictures/grünerHaken2.webp";
import { useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const ProzessErfolgreich = () => {
    const location = useLocation();
    const message = location.state?.message  || 'Keine Nachricht verfügbar';
    const [showMessage, setShowMessage] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
            navigate('/cashbox/hauptmenu');
        }, 4000 );
        return () => clearTimeout(timer);
    }, [navigate])

    if (!showMessage) {
        return null; // Verstecke die Komponente nach der Verzögerung
    }

    return (
        <div className="flex flex-col bg-blue-400 h-dvh" id="mainscreen">
            <div className="mt-44">
                <div className="w-96 mt-28 ml-auto mr-auto mb-10">
                    <img src={IconEinzahlungErfolgreich} style={{width: '150px', height: '150px', marginLeft: "130px"}}
                         alt="Geld einzahlen"/>
                </div>
                <div className="text-lg w-fit ml-auto mr-auto mt-30">
                    <div className="p-1 py-2 text-center text-2xl font-bold ml-auto mr-auto mt-5">
                        {message}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProzessErfolgreich;
