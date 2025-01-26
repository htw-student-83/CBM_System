import {useEffect, useState} from "react";
import axios from "axios";


/**
 * The component, which loads and prints the logged user
 * @returns {JSX.Element}
 * @constructor
 */
function User() {

    const [user, setUser] = useState({});
    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');
    let verbindungsart = storedLocalAdress ? storedLocalAdress: storedIpAdress;

    useEffect(() => {
        axios
            .get(`http://${verbindungsart}:4000/api/user/userdetails/profil`)
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
    }, [verbindungsart])
    return (
        <div className= "pl-5">
            <span className="font-bold">Angemeldet:</span> <span>{user.vorname +" "+ user.nachname }</span>
        </div>
    )
}

export default User;