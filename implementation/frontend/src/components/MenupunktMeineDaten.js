import React from 'react';
import {Link} from "react-router-dom";
import IconMeineDaten from "./IconMeineDaten";

/**
 * The component for the services data changing
 * @returns {Element}
 * @constructor
 */
const MenupunktMeineDaten = () => {

    return (
        <Link to='/cashbox/userdataview'>
            <div
                className="flex flex-grow justify-center text-xl mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                <IconMeineDaten/>
                <div className="mt-1">
                    Meine Daten
                </div>
            </div>
        </Link>
    )

}

export default MenupunktMeineDaten;
