import React from 'react';
import {Link} from "react-router-dom";
import IconDatenaenderung from "./IconDatenaenderung";

const Datenaenderung = () => {
    return (
        <Link to='/cashbox/hauptmenu/datachange'>
            <div className="flex flex-grow text-xl mb-7 p-3 w-96 justify-center rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                <IconDatenaenderung/>
                <div className="mt-1">
                    Meine Daten ändern
                </div>
            </div>
        </Link>
    )
}

export default Datenaenderung;
