import React, {useEffect, useState} from 'react';
import MenupunktEinzahlung from "./MenupunktEinzahlung";
import MenupunktAuszahlung from "./MenupunktAuszahlung";
import DataChange from "./FormDataChange";
import IconDatenaenderung from "./IconDatenaenderung";
import {useLocation} from "react-router-dom";

const Linkemenuhaelfte = () => {

    const location = useLocation();
    const [isModalOpen, setModalOpen] = useState(false);
    const [verbindungstyp, setVerbindungstyp] =  useState(() => {
        //TODO recherchieren, was sessionStorage genau ist und tut!
        return sessionStorage.getItem("verbindungstyp") || location.state?.message;
    });

    useEffect(() => {
        if (verbindungstyp) {
            sessionStorage.setItem("verbindungstyp", verbindungstyp);
        }
    }, [verbindungstyp]);

    return (
        <div className="flex flex-col items-center">
            <MenupunktEinzahlung message={verbindungstyp}/>
            <MenupunktAuszahlung message={verbindungstyp}/>
            <div>
                {isModalOpen ? (
                    <DataChange/>
                ) : ("")}
                <div
                    className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                    <IconDatenaenderung/>
                    <button onClick={() => setModalOpen(true)} className="mt-1">
                        Meine Daten ändern
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Linkemenuhaelfte;
