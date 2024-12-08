import IconUser from "../pictures/user2.png"
import "../components_css/einzahlung.css"
import {Link, useParams} from "react-router-dom";
import "../components_css/UserDataView.css"
import {useEffect, useState} from "react";
import axios from "axios";

function User() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:4000/api/userdetail/`)
            .then((response) => {
                if (response) {
                    setUser(response.data);
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
        <div className="flex flex-col w-96 ml-auto mr-auto mt-16 bg-blue-100 rounded-2xl h-auto " id="mainscreen">
            <div className="mt-10">
                <div className="w-96 mt-4 ml-auto mr-auto mb-10">
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
                        Registriert seit: <span className="ml-5"> {new Date(user.createdAt).toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    </div>
                </div>
            </div>
            <Link to='/cashbox/hauptmenu'>
                <div className="p-2 text-center w-96 ml-auto mr-auto mt-3 font-bold bg-blue-200 hover:counter-pointer">
                    <button>zurück</button>
                </div>
            </Link>
        </div>
    )
}

export default User;