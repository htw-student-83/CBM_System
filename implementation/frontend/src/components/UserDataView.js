import IconUser from "../pictures/user2.png"
import "../components_css/einzahlung.css"
import {Link} from "react-router-dom";
import "../components_css/UserDataView.css"
import {useEffect, useState} from "react";
import axios from "axios";

/**
 * The component, which loads and prints the details of an user
 * @returns {JSX.Element}
 * @constructor
 */
function User() {

    const [user, setUser] = useState({});

    //Message for server connection is completed
    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');

    let verbindungstyp = storedLocalAdress ? storedLocalAdress : storedIpAdress;

    useEffect(() => {
        axios
            .get(`http://${verbindungstyp}:4000/api/user/userdetails/profil`)
            .then((response) => {
                if (response) {
                    console.log(response.data)
                    setUser(response.data);
                } else {
                    return response.statusText;
                }
            })
            .catch((error) => {
                console.log("Data couldn't loaded: " + error.message);

            });
    }, [])
    return (
        <div className="flex flex-col w-96 ml-auto mr-auto mt-32 h-auto " id="mainscreen">
            <div className="mt-10 bg-gray-200 rounded-tl-3xl rounded-tr-3xl">
                <div className="w-96 mt-4 ml-auto mr-auto mb-10 pt-10 bg-gray-200">
                    <img src={IconUser} style={{width: '150px', height: '150px', marginLeft: "120px"}}
                         alt="Geld einzahlen"/>
                </div>
                <div className="pl-4 pt-5 mt-11 mb-10 border-2 ml-auto mr-auto border-black w-80 rounded-3xl">
                    <div className="mb-5">
                        Vorname:<span className="ml-16">{user.vorname}</span>
                    </div>
                    <div className="mb-5">
                        Nachname: <span className="ml-12">{user.nachname}</span>
                    </div>
                    <div className="mb-5">
                        Mobile:<span className="ml-20">{user.mobile}</span>
                    </div>
                    <div className="mb-5">
                        Registriert seit: <span className="ml-6"> {new Date(user.createdAt).toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <Link to='/cashbox/hauptmenu'>
                    <div className="p-2 text-center w-96 ml-auto mr-auto font-bold counter-pointer bg-orange-200 hover:rounded-3xl">
                        <button>zurück</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default User;