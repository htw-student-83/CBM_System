import {useEffect, useState} from "react";
import Kreuz from "../pictures/kreuz_variante2.jpg";
import '../components_css/process_failed.css'

/**
 * represent the case if the registration is failed
 * @param error the content of an error
 * @returns {JSX.Element} a colorfull object as a symbol for failed
 */
export default function Registration_failed({error}) {

    const [isOpen, setIsOpen] = useState(true);

    return  (

        <div>

            {isOpen && (

                <div className="ProcessFailedContainer" id="registration_failed">

                    <div className="logo_Kreuz">
                        <img src={Kreuz} alt="einzahlen"/>
                    </div>

                    <div className="ProcessFailed_Content">
                        <p>{error}</p>
                    </div>

                </div>
            )}
        </div>

    )

}
