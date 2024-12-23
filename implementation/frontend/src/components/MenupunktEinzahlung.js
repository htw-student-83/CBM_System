import React from 'react';
import {PiHandDeposit} from "react-icons/pi";
import {Link} from "react-router-dom";

const MenupunktEinzahlung = () => {
    return (
        <Link to='/cashbox/einzahlung'>
            <div className="flex flex-grow text-xl mb-7 p-3 w-96 justify-center rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                <div className="py-1 px-3">
                    <PiHandDeposit size={25}/>
                </div>
                <div className="mt-1">
                    Einzahlung
                </div>
            </div>
        </Link>
    )
}

export default MenupunktEinzahlung;
