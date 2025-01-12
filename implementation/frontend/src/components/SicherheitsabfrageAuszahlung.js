import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const SicherheitsabfrageAuszahlung = () => {

    const navigate = useNavigate();
    //const location = useLocation();
    //const message = location.state?.message  || 'Keine Nachricht verfügbar';
/*
    const [verbindungstyp, setVerbindungstyp] =  useState(() => {
        //TODO recherchieren, was sessionStorage genau ist und tut!
        return sessionStorage.getItem("verbindungstyp") || location.state?.message;
    });

    useEffect(() => {
        if (verbindungstyp) {
            sessionStorage.setItem("verbindungstyp", verbindungstyp);
        }
    }, [verbindungstyp]);

 */

    const goToPayout = async () => {
        navigate(`/cashbox/auszahlung`);
    }

    function handelAuszahlung() {
        sessionStorage.setItem("Auszahlungsprozess", "Der Auszahlungsprozess läuft...");
        navigate('/cashbox/prozess_server_connection_laeuft');
    }


    return (
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="py-60">
                <div className="bg-neutral-100 mx-4 mt-11 border-amber-800 ml-auto mr-auto rounded-2xl p-4 w-fit pl-6 pr-6">
                    <h1 className="text-2xl text-center">Sie wollen <span className="font-bold">{ sessionStorage.getItem("AuszahlenderBetrag") }</span> € der Kasse entnehmen?</h1>
                    <div className="flex flex-grow mx-20">
                        <button
                            id='ok'
                            className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-72 hover:bg-emerald-200 border-b-emerald-200"
                            onClick={handelAuszahlung}
                        >ok
                        </button>
                        <button
                            className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-3/5 hover:bg-neutral-200 border-b-emerald-200"
                            onClick={() => {goToPayout();}}
                        >abbrechen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SicherheitsabfrageAuszahlung;