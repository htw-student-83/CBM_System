import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import IconLogout from "./IconLogout";

const MenupunktLogout = ({id}) => {

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
        <Link to={`/cashbox/logout/${id}`} state={{message: verbindungstyp}}>
            <div
                className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                <IconLogout/>
                <div className="mt-1">
                    Logout
                </div>
            </div>
        </Link>
    )
}

export default MenupunktLogout;
