import React, {useState} from 'react';
import MenupunktEinzahlung from "./MenupunktEinzahlung";
import MenupunktAuszahlung from "./MenupunktAuszahlung";
import DataChange from "./FormDataChange";
import IconDatenaenderung from "./IconDatenaenderung";

const Linkemenuhaelfte = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center">
            <MenupunktEinzahlung/>
            <MenupunktAuszahlung/>
            <div>
                {isModalOpen ? (
                    <DataChange/>
                ) : ("")}
                <div
                    className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
                    <IconDatenaenderung/>
                    <button onClick={() => setModalOpen(true)} className="mt-1">
                        Meine Daten ändern
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Linkemenuhaelfte;
