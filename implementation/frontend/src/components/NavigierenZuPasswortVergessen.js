import React from 'react';
import {Link} from "react-router-dom";

const NavigierenZuPasswortVergessen = ({serververbindung}) => {

    return (
        <Link
            to='/cashbox/user/passwordforgot/'
            state = {{message: serververbindung}}>
            <span className="font-mono underline-offset-2 hover: cursor-pointer"> vergessen</span>
        </Link>
    )
}

export default NavigierenZuPasswortVergessen;
