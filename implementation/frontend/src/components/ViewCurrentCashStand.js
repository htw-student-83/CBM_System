import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

function Cash() {
    const [cash, setCash] = useState({});
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const [verbindungstyp, setVerbindungstyp] =  useState(() => {
        //TODO recherchieren, was sessionStorage genau ist und tut!
        return sessionStorage.getItem("verbindungstyp") || location.state?.message;
    });

    useEffect(() => {
        if (verbindungstyp) {
            sessionStorage.setItem("verbindungstyp", verbindungstyp);
        }
    }, [verbindungstyp]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://${verbindungstyp}:4000/api/cash/`)
            .then((response) => {
                if (response.status === 200 && response.data) {
                    setCash(response.data);
                    setLoading(false);
                } else {
                    return response.statusText;
                }
            })
            .catch((error) => {
                console.log("Data couldn't loaded: " + error.message);
                setLoading(false);
            });
    }, [])
    return (
        <div className="pr-10">
            <span className="font-bold">Stand:</span> <span className="font-mono"> {cash.kassenstand}</span>
        </div>
    )
}

export default Cash;