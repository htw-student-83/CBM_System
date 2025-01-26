import React from 'react';
import {GiReceiveMoney} from "react-icons/gi";

/**
 * The payout icon
 * @returns {Element}
 * @constructor
 */
const IconAuszahlung = () => {
    return (
        <div className="py-1 px-3">
            <GiReceiveMoney size={25}/>
        </div>
    )
}

export default IconAuszahlung;
