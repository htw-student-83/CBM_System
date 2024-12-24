import {useState} from "react";
import Hacken from "../pictures/haeckchen.png";
import '../components_css/process_successfully.css'


/**
 * Represent the case if a service going successfully
 * @returns {JSX.Element} a colorfull object as a symbol for success
 */
export default function Registration_Success() {

    const [isOpen, setIsOpen] = useState(true);

    return  (

        <div>

            {isOpen && (

                <div className="SuccessfullyProcessContainer" id="process_successfully">

                    <div className="logo_Hacken">
                        <img src={Hacken} alt="hacken"/>
                    </div>

                    <div className="SuccessfullyProcess_Content">
                        <p>Registration was successfully</p>
                    </div>

                </div>
            )}

        </div>

    )

}
