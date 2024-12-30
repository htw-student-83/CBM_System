import React, {useEffect, useState} from 'react';
import LinkeMenuhaelfte from "./LinkeMenuhaelfte";
import RechteMenuhaelfte from "./RechteMenuhaelfte";
import {useLocation} from "react-router-dom";

const Hauptmenupunkte = () => {

    const location = useLocation();

    //TODO Wird in einigen componenten verwendet -> don't repeat yourself!
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
        <div className="flex flex-row gap-5 z-10">
            <LinkeMenuhaelfte message={verbindungstyp}/>
            <RechteMenuhaelfte message={verbindungstyp}/>
        </div>
    )
}

export default Hauptmenupunkte;
