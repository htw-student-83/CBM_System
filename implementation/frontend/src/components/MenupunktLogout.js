import React from 'react';
import {Link} from "react-router-dom";
import IconLogout from "./IconLogout";

/**
 * The component for the services logout
 * @returns {Element}
 * @constructor
 */
const MenupunktLogout = ({id}) => {

    return (
        <Link to={`/cashbox/logout/${id}`}>
            <div
                className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                <IconLogout/>
                <div className="mt-1">
                    Logout
                </div>
            </div>
        </Link>
    )

}

export default MenupunktLogout;
