import React from "react";
import "../components_css/hauptmenu.css"
import Wasserzeichen from "./Wasserzeichen";
import Uebersicht_AngemeldeterUser_AktuellerKassenstand from "./Uebersicht_AngemeldeterUser_AktuellerKassenstand";
import Hauptmenupunkte from "./Hauptmenupunkte";

/**
 * The main menu of the system, where all services will be listed.
 * @returns {Element}
 * @constructor
 */
function Mainmenu() {

    return (
        <div className="bg-blue-400 h-screen overflow-hidden" id="mainscreen">
            <Uebersicht_AngemeldeterUser_AktuellerKassenstand/>
            <div className="flex justify-center items-center relative h-screen">
                <Wasserzeichen/>
                <Hauptmenupunkte/>
            </div>
        </div>
    );

}

export default Mainmenu;