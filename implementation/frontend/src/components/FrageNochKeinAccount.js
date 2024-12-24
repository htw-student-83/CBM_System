import React from 'react';
import NavigiereZurRegistrierung from "./NavigiereZurRegistrierung";

const FrageNochKeinAccount = () => {
    return (
        <p className="text-sm">
            Du hast noch keinen Account?
            <NavigiereZurRegistrierung/>
        </p>
    )
}

export default FrageNochKeinAccount;
