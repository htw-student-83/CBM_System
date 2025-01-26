import React, {} from 'react';
import LinkeMenuhaelfte from "./LinkeMenuhaelfte";
import RechteMenuhaelfte from "./RechteMenuhaelfte";

/**
 * The component to separate all services in two areas.
 * @returns {Element}
 * @constructor
 */
const Hauptmenupunkte = () => {

    return (
        <div className="flex flex-row gap-5 z-10">
            <LinkeMenuhaelfte/>
            <RechteMenuhaelfte/>
        </div>
    )
}

export default Hauptmenupunkte;
