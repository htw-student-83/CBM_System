import React from 'react';
import {Link} from "react-router-dom";

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
