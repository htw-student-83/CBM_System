import React from 'react';
import { useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import IconProzessErfolgreich from "./IconProzessErfolgreich";

const ProzessErfolgreich = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let message_server = "";

    //server addresses
    const storedLocalAddress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');

    //server connection successful
    const local_server = sessionStorage.getItem('server_response_for_local_connection_successfully');
    const ip_server = sessionStorage.getItem('server_response_for_remote_connection_successfully');

    //process successful
    const payment_successful = location.state?.message || 'Keine Nachricht verfügbar';
    const payout_successful = location.state?.message || 'Keine Nachricht verfügbar';

    if (payment_successful) {
        message_server = payment_successful;
        // Nachricht für erfolgreichen Einzahlungsprozess
    } else if (payout_successful) {
        message_server = payout_successful; // Nachricht für erfolgreichen Auszahlungsprozess
    } else if(local_server) {
        // Nachricht für erfolgreiche Serververbindung
        message_server = local_server
    }else{
        message_server = ip_server
    }


    useEffect(() => {
        const timer = setTimeout(() => {
            if(payment_successful || payout_successful){
                navigate('/cashbox/hauptmenu' , { replace: true, state: null });
            }else if(storedLocalAddress){
                navigate('/cashbox/login');
            }else if(storedIpAdress){
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
