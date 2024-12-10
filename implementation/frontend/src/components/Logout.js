import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Logout = () => {
    const [windowForLokalServer, setWindowForLokalServer] = useState(false);
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await axios.patch(`http://localhost:4000/api/user/logout/changeState`)
                .then(()=>{
                    navigate( '/cashbox/login');
                })
                .catch((error) => {
                    console.log("Not answer from the server." + error)
                })
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Logged-Attributs:', error);
        }
        //TODO
        //contact to the server and delete the account
        //check the process by 200
        //if the user was deleted, then navigate to the mainpage
        navigate( '/cashbox/login');
    }

    const goToMainPage = () =>{
        navigate( '/cashbox/hauptmenu');
    }

    return(
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="py-60">
                <div className="bg-neutral-100 mx-4 border-amber-800 ml-auto mr-auto rounded-2xl p-4 w-fit pl-6 pr-6">
                    <h1 className="text-xl text-center">Wollen Sie sich abmelden?</h1>
                    <div className="flex flex-grow mx-20">
                        <button id='ok' className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-40 hover:bg-emerald-200 border-b-emerald-200"
                                onClick={() => {
                                    logout();
                                }}
                        >ok</button>
                        <button className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-40  hover:bg-amber-200 border-amber-600"
                                onClick={() => {
                                    goToMainPage();
                                }}
                        >abbrechen</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Logout