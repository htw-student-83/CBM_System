import React, {} from 'react';
import LinkeMenuhaelfte from "./LinkeMenuhaelfte";
import RechteMenuhaelfte from "./RechteMenuhaelfte";

const Hauptmenupunkte = () => {

    return (
        <div className="flex flex-row gap-5 z-10">
            <LinkeMenuhaelfte/>
            <RechteMenuhaelfte/>
        </div>
    )
}

export default Hauptmenupunkte;
