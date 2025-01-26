import React from 'react';
import MenupunktMeineDaten from "./MenupunktMeineDaten";
import MenupunktLogout from "./MenupunktLogout";
import MenupunktAccountLoeschen from "./MenupunktAccountLoeschen";

/**
 * This component represents the right area of services of the system
 * @returns {Element}
 * @constructor
 */
const RechteMenuhaelfte = () => {

    return (
        <div className="flex flex-col items-center">
            <MenupunktMeineDaten/>
            <MenupunktLogout/>
            <MenupunktAccountLoeschen/>
        </div>
    )

}

export default RechteMenuhaelfte;
