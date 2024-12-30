import React, {useEffect, useState} from "react";
import "../components_css/hauptmenu.css"
import Wasserzeichen from "./Wasserzeichen";
import Uebersicht_AngemeldeterUser_AktuellerKassenstand from "./Uebersicht_AngemeldeterUser_AktuellerKassenstand";
import Hauptmenupunkte from "./Hauptmenupunkte";
import {useLocation} from "react-router-dom";

function Mainmenu() {

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
        <div className="bg-blue-400 h-screen overflow-hidden" id="mainscreen">
            <Uebersicht_AngemeldeterUser_AktuellerKassenstand verbindungstyp = {verbindungstyp}/>
            <div className="flex justify-center items-center bg-blue-400 relative h-screen">
                <Wasserzeichen/>
                <Hauptmenupunkte verbindungstyp = {verbindungstyp}/>
            </div>
        </div>
    );
}

export default Mainmenu;