import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const EinzahlungNichtErfolgreich = ({ message }) => {

    const [showMessage, setShowMessage] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
            navigate('/cashbox/einzahlung');
        }, 3000 );
        return () => clearTimeout(timer);
    }, [navigate])
/*
    if(!message)
        return null

    if (!showMessage) {
        return null; // Verstecke die Komponente nach der Verzögerung
    }


 */
    return (
        <div className="w-full text-2xl text-center text-red-700 font-bold mt-5 p-4">
            Es ist es Fehler aufgetreten.
        </div>
    )
}

export default EinzahlungNichtErfolgreich;
