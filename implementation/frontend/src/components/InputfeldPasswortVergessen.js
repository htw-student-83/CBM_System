import React, {useState} from 'react';
import ButtonPasswortVergessen from "./ButtonPasswortVergessen";
import IconInnerhalbDesINputfeldes from "./IconInnerhalbDesInputfeldes";
import {useNavigate} from "react-router-dom";
import LabelPasswortVergessen from "./LabelPasswortVergessen";


/**
 * The input field of password forgotten
 * @returns {Element}
 * @constructor
 */
const InputfeldPasswortVergessen = () => {

    const[mobile, setMobile] = useState("");
    const navigate = useNavigate();

    /**
     * go back to the hauptmenu
     */
    function handelCancle(){
        navigate(`/cashbox/login`);
    }

    return (
        <div className="w-fit h-fit">
            <form>
                <LabelPasswortVergessen/>
                <div className="flex flex-row p-1 mt-2 border-2 border-gray-300">
                    <IconInnerhalbDesINputfeldes/>
                    <input
                        type="text"
                        id="forgotpassword"
                        name="forgotpassword"
                        onChange={(e) => setMobile(e.target.value)}
                        className="ml-4 focus:outline-none"
                    />
                </div>
            </form>
            <ButtonPasswortVergessen mobile={mobile}/>
            <div
                onClick={handelCancle}
                className="p-1 py-2 text-center font-bold ml-auto mr-auto  mt-3 bg-gray-300 hover:rounded-3xl cursor-pointer hover:bg-orange-200">
                abbrechen
            </div>
        </div>
    )
}

export default InputfeldPasswortVergessen;
