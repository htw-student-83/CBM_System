import React from 'react';
import {Link} from "react-router-dom";
import IconAuszahlung from "./IconAuszahlung";

const MenupunktAuszahlung = () => {

    return (
        <Link to={'/cashbox/auszahlung'}>
            <div
                className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                <IconAuszahlung/>
                <div className="mt-1">
                    Auszahlung
                </div>
            </div>
        </Link>
    )
}

export default MenupunktAuszahlung;
