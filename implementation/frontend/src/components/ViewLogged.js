import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

function User() {
    const [user, setUser] = useState({});
    const location = useLocation();
    const [verbindungstyp] =  useState(() => {
        //TODO recherchieren, was sessionStorage genau ist und tut!
        return sessionStorage.getItem("verbindungstyp") || location.state?.message;
    });

    useEffect(() => {
        if (verbindungstyp) {
            sessionStorage.setItem("verbindungstyp", verbindungstyp);
        }
    }, [verbindungstyp]);

    useEffect(() => {
        axios
            .get(`http://${verbindungstyp}:4000/api/user/userdetails/profil`)
            .then((response) => {
                if (response) {
                    setUser(response.data);
                } else {
                    return response.statusText;
                }
            })
            .catch((error) => {
                console.log("Data couldn't loaded: " + error.message);
            });
    }, [verbindungstyp])
    return (
        <div className= "pl-5">
            <span className="font-bold">Angemeldet:</span> <span>{user.vorname +" "+ user.nachname }</span>
        </div>
    )
}

export default User;