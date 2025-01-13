import React from 'react';
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import IconProzessErfolgreich from "./IconProzessErfolgreich";

const ProzessErfolgreich = () => {
    const navigate = useNavigate();

    let message_server = "";

    //server connection successful
    const local_server = sessionStorage.getItem('server_response_for_local_connection_successfully');
    const ip_server = sessionStorage.getItem('server_response_for_remote_connection_successfully');

    //Einzahlung erfolgreich
    const signalWortEinzahlung = sessionStorage.getItem("Einzahlung erfolgreich");
    const signalWortAuszahlung = sessionStorage.getItem("Auszahlung erfolgreich");

    //Festlegung, welcher Text ausgegeben werden soll
    if(signalWortEinzahlung){
        message_server = signalWortEinzahlung;
    } else if(signalWortAuszahlung){
        message_server = signalWortAuszahlung;
    }else if(local_server){
        message_server = local_server;
    }else {
        message_server = ip_server;
    }


    useEffect(() => {
        const timer = setTimeout(() => {
            if(signalWortEinzahlung){
                sessionStorage.removeItem("Einzahlung erfolgreich")
                navigate('/cashbox/hauptmenu');
            }else if(signalWortAuszahlung){
                sessionStorage.removeItem("Auszahlung erfolgreich")
                navigate('/cashbox/hauptmenu');
            }else if(local_server){
                navigate('/cashbox/login');
            }else if(ip_server){
                navigate('/cashbox/login');
            }
        }, 4000 );
        return () => clearTimeout(timer);
    }, [navigate])

    return (
        <div className="flex flex-col bg-blue-400 h-dvh" id="mainscreen">
            <div className="mt-44">
                <IconProzessErfolgreich/>
                <div className="text-lg w-fit ml-auto mr-auto mt-30">
                    <div className="p-1 py-2 text-center text-2xl font-bold ml-auto mr-auto mt-5">
                        {message_server}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProzessErfolgreich;
