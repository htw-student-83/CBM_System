import MainIcon from "./MainIcon";
import TopicPasswortVergessen from "./TopicPasswortVergessen";
import InputfeldPasswortVergessen from "./InputfeldPasswortVergessen";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

/**
 * The component about password forgot
 * @returns {JSX.Element}
 * @constructor
 */
export default function PasswortVergessen(){
/*
    const location = useLocation();

    const [verbindungstyp, setVerbindungstyp] =  useState(() => {
        return sessionStorage.getItem("verbindungstyp") || location.state?.message;
    });

    useEffect(() => {
        if (verbindungstyp) {
            sessionStorage.setItem("verbindungstyp", verbindungstyp);
        }
    }, [verbindungstyp]);

 */

    return(
        <div className="bg-sky-300 h-dvh pt-40">
            <div className="flex flex-col justify-center bg-white w-fit p-10 mt-10 ml-auto mr-auto rounded-3xl">
                <MainIcon/>
                <TopicPasswortVergessen/>
                <InputfeldPasswortVergessen/>
            </div>
        </div>
    )
}