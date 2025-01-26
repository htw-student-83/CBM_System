import React from 'react';
import {MdDelete} from "react-icons/md";


/**
 * The delete icon
 * @returns {Element}
 * @constructor
 */
const IconAccountLoeschen = () => {
    return (
        <div className="py-1 px-3">
            <MdDelete size={25}/>
        </div>
    )
}

export default IconAccountLoeschen;
