import React, {useState} from 'react';
import { useEffect} from "react";
import {useNavigate} from "react-router-dom";
import IconProzessErfolgreich from "./IconProzessErfolgreich";

const ProzessErfolgreich = () => {
    const navigate = useNavigate();

    let message_server = "";

    //server addresses
    const storedLocalAddress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');

    //server connection successful
    const local_server = sessionStorage.getItem('server_response_for_local_connection_successfully');
    const ip_server = sessionStorage.getItem('server_response_for_remote_connection_successfully');

    message_server = local_server ? local_server : ip_server;

    //Process successful
    const payment_succesfll = sessionStorage.getItem('server_response_for_successful_payment');
    const payout_succesfll = sessionStorage.getItem('server_response_for_successful_payout');


    useEffect(() => {
        const timer = setTimeout(() => {
            if(storedLocalAddress){
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
