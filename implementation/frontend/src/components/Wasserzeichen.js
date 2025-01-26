import React from 'react';
import {FaCashRegister} from "react-icons/fa";

/**
 * The picture in the background in the main menu
 * @returns {Element}
 * @constructor
 */
const Wasserzeichen = () => {
    return (
        <div className="absolute inset-0 flex justify-center mb-32 items-center opacity-10 pointer-events-none z-0">
            <FaCashRegister size={650} className="text-gray-100"/>
        </div>
    )
}

export default Wasserzeichen;
