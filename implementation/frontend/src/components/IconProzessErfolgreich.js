import React from 'react';
import IconEinzahlungErfolgreich from "../pictures/grünesHäkchen2.webp";

const IconProzessErfolgreich = () => {
    return (
        <div className="w-96 mt-28 ml-auto mr-auto mb-10">
            <img src={IconEinzahlungErfolgreich} style={{width: '150px', height: '150px', marginLeft: "130px"}}
                 alt="Geld einzahlen"/>
        </div>
    )
}

export default IconProzessErfolgreich;
