import React, {useEffect} from "react";
import '../components_css/process_successfully.css'
import IconProzessRegistrationErfolgreich from "../pictures/registration_erfolgreich.jpg";
import {useNavigate} from "react-router-dom";


/**
 * This component will be printed if the registration was successfully
 * @returns {JSX.Element} a colorfull object as a symbol for success
 */
export default function Registration_Success() {

    const result_registratrierung = sessionStorage.getItem("Registrierung erfolgreich");
    const navigate = useNavigate();


    useEffect(() => {
        setTimeout(() => {
            navigate('/cashbox/login')
        },4000 )
    });

    return (

        <div className="flex flex-col bg-white h-dvh" id="mainscreen">
            <div className="flex flex-col mt-44">
                <img
                    src={IconProzessRegistrationErfolgreich}
                    alt="Erfolgreiche Registrierung"
                    className="ml-auto mr-auto  size-80 "
                />
                <div className="text-lg w-fit ml-auto mr-auto mt-30">
                    <div className="p-1 py-2 text-center text-2xl font-bold ml-auto mr-auto mt-5">
                        <h1>{result_registratrierung}</h1>
                    </div>
                </div>
            </div>

        </div>

    )

}
