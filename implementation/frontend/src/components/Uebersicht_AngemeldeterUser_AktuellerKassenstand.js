import React from 'react';
import ViewLogged from "./ViewLogged";
import Cash from "./ViewCurrentCashStand";

/**
 * the main component, which includes the component to print the current logged
 * user and the currently stand in the cash box
 * @returns {Element}
 * @constructor
 */
const Uebersicht_AngemeldeterUser_AktuellerKassenstand = () => {

    return (
        <div className="flex flex-grow justify-between p-5 font-mono">
            <ViewLogged/>
            <Cash/>
        </div>
    )

}

export default Uebersicht_AngemeldeterUser_AktuellerKassenstand;
