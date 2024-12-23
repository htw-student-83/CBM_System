import React, {useState} from 'react';
import IconDatenaenderung from "./IconDatenaenderung";

const MenupunktDatenaenderung = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div
            className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300">
            <IconDatenaenderung/>
            <button onClick={() => setModalOpen(true)} className="mt-1">
                Meine Daten ändern
            </button>
        </div>
    )
}

export default MenupunktDatenaenderung;
