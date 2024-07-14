import {useState} from "react";
import Kreuz from "../pictures/kreuz_variante2.jpg";
import '../components_css/process_failed.css'
import '../components_css/animationToRight.css'

/**
 * represent a service, which is failed
 * @param error the content of an error
 * @returns {JSX.Element} a colorfull object as a symbol for succeee
 */
export default function Services_Fail({error}) {

    const [isOpen, setIsOpen] = useState(true);

    return  (

        <div>

            {isOpen && (
                <div className="ProcessFailedContainer" id="service_failed">

                    <div className="logo_Kreuz">
                        <img src={Kreuz} alt="kreuz"/>
                    </div>

                    <div className="ProcessFailed_Content">
                        <p>{error}</p>
                    </div>

                </div>
            )}
        </div>

    )

}
