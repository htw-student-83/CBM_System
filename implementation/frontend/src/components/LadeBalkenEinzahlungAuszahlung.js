import {startPayment} from "./APIEinzahlung";
import {startPayout} from "./APIPayout";

import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const Ladevorgang_Einzahlung_Auszahlung  = ({ size = 150, strokeWidth = 10 }) => {

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const navigate = useNavigate();
    const location = useLocation();

    //Message for server connection is working
    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');

    //Message for payment and payout is working
    const [message_payment_payout_is_working] = useState(location.state?.message);
    const [message_betrag] = useState(location.state?.betrag);

    let verbindungsart = storedLocalAdress ? storedLocalAdress : storedIpAdress;

    useEffect( () => {
        const checkCashProzess = async () => {
            if (message_payment_payout_is_working === "Der Einzahlungsprozess läuft...") {
                const server_response = await startPayment(verbindungsart);
                if (server_response) {
                    navigate(`/cashbox/prozess_erfolgreich`, {state: {message: server_response}});
                } else {
                    navigate(`/cashbox/prozess_nicht_erfolgreich`);
                }
            } else {
                const server_response = await startPayout(verbindungsart, message_betrag);
                if (server_response) {
                    navigate(`/cashbox/prozess_erfolgreich`, {state: {message: server_response}});
                } else {
                    navigate(`/cashbox/prozess_nicht_erfolgreich`);
                }
            }
        }
        const timeoutId = setTimeout(() => {
            checkCashProzess();
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
                    {message_payment_payout_is_working}
                </div>
            </div>
        </div>
    );
}

export default Ladevorgang_Einzahlung_Auszahlung;



