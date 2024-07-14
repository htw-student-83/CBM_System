import {useState} from "react";
import Hacken from "../pictures/haeckchen.png";
import '../components_css/process_successfully.css'


/**
 * represent the case if a process is successfull
 * @param content
 * @returns {JSX.Element} a colorfull object as a symbol for success
 */
export default function Services_Success({content}) {
    const [isOpen, setIsOpen] = useState(true);

    return  (

        <div>

            {isOpen && (
                <div className="SuccessfullyProcessContainer" id="service_successfully">

                    <div className="logo_Hacken">
                        <img src={Hacken} alt="hacken"/>
                    </div>

                    <div className="SuccessfullyProcess_Content">
                        <p>{content}</p>
                    </div>

                </div>
            )}
        </div>

    )

}
