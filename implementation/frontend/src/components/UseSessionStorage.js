import {useEffect, useState} from "react";

export const useSessionStorage = (key, initialValue) => {
    const [verbindungstyp, setVerbindungstyp] =  useState(() => {
        try {
            const savedServerAdress = sessionStorage.getItem(key);
            return savedServerAdress ? savedServerAdress: initialValue;
        }catch (error){
            return "the server address couldn't loaded.";
        }

    });

    useEffect(() => {
        if (verbindungstyp) {
            sessionStorage.setItem("verbindungstyp", verbindungstyp);
        }
    }, [verbindungstyp]);
}
