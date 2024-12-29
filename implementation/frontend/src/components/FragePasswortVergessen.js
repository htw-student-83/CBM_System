import React, {useEffect, useState} from 'react';
import NavigierenZuPasswortVergessen from "./NavigierenZuPasswortVergessen";
import {useLocation} from "react-router-dom";

const FragePasswortVergessen = ({message}) => {

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


    console.log("Übertragener Wert in FragePasswortVergessen: " + message)
    return (
        <p className="text-sm mt-2">
            Passwort vergessen?
            <NavigierenZuPasswortVergessen serververbindung={verbindungstyp}/>
        </p>
    )
}

export default FragePasswortVergessen;
