import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {MdDelete} from "react-icons/md";
import IconAccountLoeschen from "./IconAccountLoeschen";

const MenupunktAccountLoeschen = () => {

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
        <Link to={`/cashbox/account_loeschung/`}>
            <div
                className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                <IconAccountLoeschen/>
                <div className="mt-1">
                    Account löschen
                </div>
            </div>
        </Link>
    )
}

export default MenupunktAccountLoeschen;
