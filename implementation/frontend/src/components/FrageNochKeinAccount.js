import React from 'react';
import NavigiereZurRegistrierung from "./NavigiereZurRegistrierung";

/**
 * The component for the case that an new user wants to use this system.
 * @returns {Element}
 * @constructor
 */
const FrageNochKeinAccount = () => {
    return (
        <p className="text-sm">
            Du hast noch keinen Account?
            <NavigiereZurRegistrierung/>
        </p>
    )
}

export default FrageNochKeinAccount;
