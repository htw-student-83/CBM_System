import React, {useEffect, useState} from 'react';
import {PiHandDeposit} from "react-icons/pi";
import {Link, useLocation} from "react-router-dom";

const MenupunktEinzahlung = () => {

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
        <Link to='/cashbox/einzahlung'>
            <div className="flex flex-grow text-xl mb-7 p-3 w-96 justify-center rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                <div className="py-1 px-3">
                    <PiHandDeposit size={25}/>
                </div>
                <div className="mt-1">
                    Einzahlung
                </div>
            </div>
        </Link>
    )
}

export default MenupunktEinzahlung;
