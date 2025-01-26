import React from 'react';
import NavigierenZuPasswortVergessen from "./NavigierenZuPasswortVergessen";

/**
 * The component for the cass the user has forgotten his password
 * @constructor
 */
const FragePasswortVergessen = () => {

    return (
        <p className="text-sm mt-2">
            Passwort vergessen?
            <NavigierenZuPasswortVergessen/>
        </p>
    )
}

export default FragePasswortVergessen;
