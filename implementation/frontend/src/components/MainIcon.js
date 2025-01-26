import React from 'react';
import {FaCashRegister} from "react-icons/fa6";

/**
 * The main icon of the system
 * @returns {Element}
 * @constructor
 */
const MainIcon = () => {
    return (
        <div className="ml-auto mr-auto pt-5">
            <FaCashRegister size={80}/>
        </div>
    )
}

export default MainIcon;
