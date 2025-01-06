import React, {useEffect} from 'react';
import '../components_css/circularLoader.css';
import { useNavigate} from "react-router-dom";
import {connectToLocalhost} from "./Frontend_localServer";
import {connectToRemoteServer} from "./Frontend_RemoteServerVerbindung";

const CircularLoader = ({ size = 150, strokeWidth = 10 }) => {

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const navigate = useNavigate();
    const message_evaluation_is_working = sessionStorage.getItem('message_evaluation_is_working');
    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');

    let verbindungsart = storedLocalAdress ? storedLocalAdress : storedIpAdress;

   //const ersteZweiWoerter = messageFromServer.split(" ").slice(0, 2).join(" ");

    useEffect(() => {
        console.log("ich bin hier");
        const checkServer = async () => {
            console.log("checkServer() wird aufgerufen");
            if (verbindungsart === "localhost") {
                const server_response = await connectToLocalhost(verbindungsart);
                if (server_response === 200) {
                    sessionStorage.setItem('server_response_for_connection_successfully', "Verbindung ist aufgebaut");
                    navigate(`/cashbox/prozess_erfolgreich`, {
                        state: {
                            message_art_server_connection: verbindungsart,
                        }
                    });
                } else {
                    sessionStorage.setItem('server_response_for_connection_failed', "Verbindungsaufbau ist fehlgeschlagen");
                    navigate(`/cashbox/serverFail`, {
                        state: {
                            message_art_server_connection: verbindungsart,
                        }
                    });
                }
            } else if (verbindungsart === "192.168.178.23") {
                const server_response = await connectToRemoteServer(verbindungsart);
                if (server_response === 200) {
                    navigate(`/cashbox/prozess_erfolgreich`, {
                        state: {
                            server_response: "Verbindung ist aufgebaut",
                            message_art_server_connection: verbindungsart,
                        }
                    });
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
                    {message_evaluation_is_working}
                </div>
            </div>
        </div>
    );
}
export default CircularLoader;
