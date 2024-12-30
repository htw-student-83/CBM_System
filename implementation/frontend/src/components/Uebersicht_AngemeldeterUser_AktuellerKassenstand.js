import React, {useEffect, useState} from 'react';
import ViewLogged from "./ViewLogged";
import Cash from "./ViewCurrentCashStand";
import {useLocation} from "react-router-dom";

const Uebersicht_AngemeldeterUser_AktuellerKassenstand = () => {

    const location = useLocation();
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
        <div className="flex flex-grow justify-between p-5 font-mono">
            <ViewLogged message={verbindungstyp}/>
            <Cash message={verbindungstyp}/>
        </div>
    )
}

export default Uebersicht_AngemeldeterUser_AktuellerKassenstand;
