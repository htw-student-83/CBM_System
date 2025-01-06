import React from "react";
import "../components_css/hauptmenu.css"
import Wasserzeichen from "./Wasserzeichen";
import Uebersicht_AngemeldeterUser_AktuellerKassenstand from "./Uebersicht_AngemeldeterUser_AktuellerKassenstand";
import Hauptmenupunkte from "./Hauptmenupunkte";

function Mainmenu() {

    return (
        <div className="bg-blue-400 h-screen overflow-hidden" id="mainscreen">
            <Uebersicht_AngemeldeterUser_AktuellerKassenstand/>
            <div className="flex justify-center items-center bg-blue-400 relative h-screen">
                <Wasserzeichen/>
                <Hauptmenupunkte/>
            </div>
        </div>
    );

}

export default Mainmenu;