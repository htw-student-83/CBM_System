import React, {useEffect, useState} from 'react';
import MenupunktMeineDaten from "./MenupunktMeineDaten";
import MenupunktLogout from "./MenupunktLogout";
import MenupunktAccountLoeschen from "./MenupunktAccountLoeschen";
import {useLocation} from "react-router-dom";

const RechteMenuhaelfte = () => {

    const location = useLocation();

    const [verbindungstyp, setVerbindungstyp] =  useState(() => {
        return sessionStorage.getItem("verbindungstyp") || location.state?.message;
    });

    useEffect(() => {
        if (verbindungstyp) {
            sessionStorage.setItem("verbindungstyp", verbindungstyp);
        }
    }, [verbindungstyp]);

    return (
        <div className="flex flex-col items-center">
            <MenupunktMeineDaten message={verbindungstyp}/>
            <MenupunktLogout message={verbindungstyp}/>
            <MenupunktAccountLoeschen message={verbindungstyp}/>
        </div>
    )
}

export default RechteMenuhaelfte;
