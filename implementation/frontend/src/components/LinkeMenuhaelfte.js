import React from 'react';
import MenupunktEinzahlung from "./MenupunktEinzahlung";
import MenupunktAuszahlung from "./MenupunktAuszahlung";
import MenupunktDatenAenderung from "./MenupunktDatenAenderung";

/**
 * The component represents the left area of services of the system
 * @constructor
 */
const Linkemenuhaelfte = () => {

    return (
        <div className="flex flex-col items-center">
            <MenupunktEinzahlung/>
            <MenupunktAuszahlung/>
            <MenupunktDatenAenderung/>
        </div>
    )
}

export default Linkemenuhaelfte;
