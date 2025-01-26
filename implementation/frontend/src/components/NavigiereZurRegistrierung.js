import React from 'react';
import {Link} from "react-router-dom";

/**
 * The component to navigate to registration
 * @returns {Element}
 * @constructor
 */
const NavigiereZurRegistrierung = () => {
    return (
        <Link to='/cashbox/user/registrierung'>
            <span
                className="font-mono underline-offset-2 hover: cursor-pointer"> Registrierung
            </span>
        </Link>
    )
}

export default NavigiereZurRegistrierung;
