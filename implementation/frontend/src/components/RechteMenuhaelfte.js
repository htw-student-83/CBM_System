import React from 'react';
import MenupunktMeineDaten from "./MenupunktMeineDaten";
import MenupunktLogout from "./MenupunktLogout";
import MenupunktAccountLoeschen from "./MenupunktAccountLoeschen";

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
