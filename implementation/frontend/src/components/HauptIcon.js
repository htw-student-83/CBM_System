import React from 'react';
import {Link} from "react-router-dom";
import {FaCashRegister} from "react-icons/fa6";

/**
 * The main icon of the system. After a click on it the user will be forwarded
 * to the page for server connection automatically
 * @returns {Element}
 * @constructor
 */
const HauptIcon = () => {
    return (
        <Link to='/cashbox/serverArt'>
            <FaCashRegister icon="fa-thin fa-cash-register" size={150}/>
        </Link>
    )
}

export default HauptIcon;
