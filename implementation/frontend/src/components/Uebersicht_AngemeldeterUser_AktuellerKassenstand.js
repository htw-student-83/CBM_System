import React from 'react';
import ViewLogged from "./ViewLogged";
import Cash from "./ViewCurrentCashStand";
const Uebersicht_AngemeldeterUser_AktuellerKassenstand = () => {

    return (
        <div className="flex flex-grow justify-between p-5 font-mono">
            <ViewLogged/>
            <Cash/>
        </div>
    )

}

export default Uebersicht_AngemeldeterUser_AktuellerKassenstand;
