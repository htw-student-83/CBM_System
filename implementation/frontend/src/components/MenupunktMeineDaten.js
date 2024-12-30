import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import IconMeineDaten from "./IconMeineDaten";

const MenupunktMeineDaten = () => {

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
        <Link to='/cashbox/userdataview' state={{message: verbindungstyp}}>
            <div
                className="flex flex-grow justify-center text-xl mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                <IconMeineDaten/>
                <div className="mt-1">
                    Meine Daten
                </div>
            </div>
        </Link>
    )
}

export default MenupunktMeineDaten;
