import React, {useState} from 'react';
import MenupunktEinzahlung from "./MenupunktEinzahlung";
import MenupunktAuszahlung from "./MenupunktAuszahlung";
import DataChange from "./FormDataChange";
import MenupunktDatenaenderung from "./MenupunktDatenaenderung";

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
                <MenupunktDatenaenderung/>
            </div>
        </div>
    )
}

export default Linkemenuhaelfte;
