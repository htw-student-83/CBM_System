import React from 'react';
import {Link} from "react-router-dom";


/**
 * The component to navigate to password forgotten
 * @returns {Element}
 * @constructor
 */
const NavigierenZuPasswortVergessen = () => {

    return (
        <Link
            to='/cashbox/user/passwordforgot/'>
            <span className="font-mono underline-offset-2 hover: cursor-pointer"> vergessen</span>
        </Link>
    )
}

export default NavigierenZuPasswortVergessen;
