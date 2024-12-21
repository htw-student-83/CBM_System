import React, { useEffect, useState } from 'react';
import '../components_css/circularLoader.css';
import {useNavigate} from "react-router-dom";

const CircularLoader = ({ size = 150, strokeWidth = 10 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const navigate = useNavigate();

    setTimeout(() => {
        navigate(`/cashbox/einzahlung_erfolgreich`);
    }, 5000)

    useEffect(() => {
        const circle = document.querySelector('.progress');
        let rotation = 0;
        const interval = setInterval(() => {
            rotation += 10;
            circle.style.transform = `rotate(${rotation}deg)`;
        }, 30);
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
                    Eingabe wird geprüft...
                </div>
            </div>
        </div>
    );
};
export default CircularLoader;
