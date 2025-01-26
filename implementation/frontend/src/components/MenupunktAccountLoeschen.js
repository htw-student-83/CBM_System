import React from 'react';
import {Link} from "react-router-dom";
import IconAccountLoeschen from "./IconAccountLoeschen";

/**
 * The component for the services account deleting
 * @returns {Element}
 * @constructor
 */
const MenupunktAccountLoeschen = () => {

    return (
        <Link to={`/cashbox/account_loeschung/`}>
            <div
                className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                <IconAccountLoeschen/>
                <div className="mt-1">
                    Account löschen
                </div>
            </div>
        </Link>
    )

}

export default MenupunktAccountLoeschen;
