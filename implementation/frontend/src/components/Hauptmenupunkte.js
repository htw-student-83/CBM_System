import React, {} from 'react';
import LinkeMenuhaelfte from "./LinkeMenuhaelfte";
import RechteMenuhaelfte from "./RechteMenuhaelfte";
import {useLocation} from "react-router-dom";

const Hauptmenupunkte = () => {

    const location = useLocation();

    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');

    let verbindungsart = storedLocalAdress ? storedLocalAdress : storedIpAdress;
    console.log("Gelandener Wert: " + verbindungsart)

    /*
    //TODO Wird in einigen componenten verwendet -> don't repeat yourself!
    const [verbindungstyp, setVerbindungstyp] =  useState(() => {
        //TODO recherchieren, was sessionStorage genau ist und tut!
        return sessionStorage.getItem("verbindungstyp") || location.state?.message;
    });

    useEffect(() => {
        if (verbindungsart) {
            sessionStorage.setItem("verbindungstyp", verbindungstyp);
        }
    }, [verbindungstyp]);
     */

    return (
        <div className="flex flex-row gap-5 z-10">
            <LinkeMenuhaelfte message={verbindungsart}/>
            <RechteMenuhaelfte message={verbindungsart}/>
        </div>
    )
}

export default Hauptmenupunkte;
