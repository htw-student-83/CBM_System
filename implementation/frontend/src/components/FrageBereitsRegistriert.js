import React from 'react';
import {Link} from "react-router-dom";

const FrageBereitsRegistriert = () => {
    return (
        <p>Bereits registriet?
            <Link to='/cashbox/login'>
                <span
                    className="font-mono underline-offset-2 hover: cursor-pointer"> Login
                </span>
            </Link>
        </p>
    )
}

export default FrageBereitsRegistriert;
