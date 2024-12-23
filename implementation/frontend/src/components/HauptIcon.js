import React from 'react';
import {Link} from "react-router-dom";
import {FaCashRegister} from "react-icons/fa6";

const HauptIcon = () => {
    return (
        <Link to='/cashbox/serverArt'>
            <FaCashRegister icon="fa-thin fa-cash-register" size={150}/>
        </Link>
    )
}

export default HauptIcon;
