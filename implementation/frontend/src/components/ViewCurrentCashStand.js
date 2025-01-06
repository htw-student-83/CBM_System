import {useEffect, useState} from "react";
import axios from "axios";

function Cash() {

    const [currentCash, setCurrentCash] = useState({});
    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');
    let verbindungsart = storedLocalAdress ? storedLocalAdress: storedIpAdress;

    useEffect(() => {
        axios
            .get(`http://${verbindungsart}:4000/api/cash/`)
            .then((response) => {
                if (response.status === 200 && response.data) {
                    setCurrentCash({kassenstand: response.data});
                } else {
                    return response.statusText;
                }
            })
            .catch((error) => {
                console.log("Data couldn't loaded: " + error.message);
            });
    }, [])
    return (
        <div className="pr-10">
            <span className="font-bold">Stand:</span> <span className="font-mono"> {currentCash.kassenstand} €</span>
        </div>
    )
}

export default Cash;