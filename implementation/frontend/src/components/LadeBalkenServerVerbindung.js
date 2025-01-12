import React, {useEffect} from 'react';
import '../components_css/circularLoader.css';
import { useNavigate} from "react-router-dom";
import {connectToLocalhost} from "./Frontend_localServer";
import {connectToRemoteServer} from "./Frontend_RemoteServerVerbindung";
import {startPayment} from "./APIEinzahlung";
import {startPayout} from "./APIPayout";

const CircularLoader = ({ size = 150, strokeWidth = 10 }) => {

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const navigate = useNavigate();

    let message_server_connection_is_working = "";

    //Message for server connection is working
    const server_remote_verbindung_aufbau = sessionStorage.getItem('Verbindung_Remote_im_Aufbau');
    const server_local_verbindung_aufbau = sessionStorage.getItem("Verbindung_local_im_Aufbau");

    //Message for server connection is completed
    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');


    let verbindungsart = storedLocalAdress ? storedLocalAdress : storedIpAdress;

    if(server_local_verbindung_aufbau){
        message_server_connection_is_working = server_local_verbindung_aufbau;
    }else {
        message_server_connection_is_working = server_remote_verbindung_aufbau;
    }


    useEffect(() => {
        const checkServer = async () => {
            if (verbindungsart === "localhost") {
                const server_response = await connectToLocalhost(verbindungsart);
                if (server_response === 200) {
                    sessionStorage.setItem('server_response_for_local_connection_successfully', "Lokale Verbindung ist aufgebaut");
                    navigate(`/cashbox/prozess_erfolgreich`);
                } else {
                    navigate(`/cashbox/serverFail`);
                }
            } else if (verbindungsart === "192.168.178.23") {
                const server_response = await connectToRemoteServer(verbindungsart);
                if (server_response === 200) {
                    sessionStorage.setItem('server_response_for_remote_connection_successfully', "Remoteverbindung ist aufgebaut");
                    navigate(`/cashbox/prozess_erfolgreich`);
                } else {
                    navigate(`/cashbox/serverFail`);
                }
            }
        };

        const timeoutId = setTimeout(() => {
            checkServer();
        },5000);

    // Bereinigung des Timeouts
    return () => clearTimeout(timeoutId);
}, [verbindungsart, navigate]);


    useEffect(() => {
        // Rotation des Kreises
        const circle = document.querySelector('.progress');
        let rotation = 0;
        const interval = setInterval(() => {
            rotation += 15;
            circle.style.transform = `rotate(${rotation}deg)`;
        }, 30);

        // Aufräumlogik für den Intervall
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="mt-72">
            <div className=" flex flex-col circular-loader">
                <svg width={size} height={size}>
                    <circle
                        className="background"
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />
                    <circle
                        className="progress"
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference / 1.5}
                    />
                </svg>
                <div className="mt-11 text-2xl font-bold">
                    {message_server_connection_is_working}
                </div>
            </div>
        </div>
    );
}
export default CircularLoader;
