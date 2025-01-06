import React, {useState} from 'react';
import { useEffect} from "react";
import {useNavigate} from "react-router-dom";
import IconProzessErfolgreich from "./IconProzessErfolgreich";

const ProzessErfolgreich = () => {
    const [showMessage, setShowMessage] = useState(true);
    const navigate = useNavigate();

    const storedLocalAddress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');
    const connection_succesfll = sessionStorage.getItem('server_response_for_connection_successfully');

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
            if(storedLocalAddress){
                navigate('/cashbox/login' , {
                    state: {
                        message_art_server_connection: storedLocalAddress,
                    }
                });
            }else if(storedIpAdress){
                navigate('/cashbox/login' , {
                    state: {
                        message_art_server_connection: storedIpAdress,
                    }
                });
            }
        }, 4000 );
        return () => clearTimeout(timer);
    }, [navigate])

    if (!showMessage) {
        return null; // Verstecke die Komponente nach der Verzögerung
    }

    return (
        <div className="flex flex-col bg-blue-400 h-dvh" id="mainscreen">
            <div className="mt-44">
                <IconProzessErfolgreich/>
                <div className="text-lg w-fit ml-auto mr-auto mt-30">
                    <div className="p-1 py-2 text-center text-2xl font-bold ml-auto mr-auto mt-5">
                        {connection_succesfll}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProzessErfolgreich;
