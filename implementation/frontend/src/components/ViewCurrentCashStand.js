import {useEffect, useState} from "react";
import axios from "axios";

function Cash() {
    const [cash, setCash] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:4000/api/cash/`)
            .then((response) => {
                if (response.status === 200 && response.data) {
                    console.log("Kassenstand enthalten: " , response.data);
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