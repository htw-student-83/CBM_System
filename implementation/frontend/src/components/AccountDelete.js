import {useNavigate} from 'react-router-dom'
import axios from "axios";

/**
 * a component to handle the delete process
 * @returns {JSX.Element}
 * @constructor
 */
const AccountDelete = () => {
    const navigate = useNavigate();

    //Message for server connection is completed
    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');

    let verbindungstyp = storedLocalAdress ? storedLocalAdress : storedIpAdress;

    const deleteAccount = async() =>{
        try {
            await axios.delete(`http://${verbindungstyp}:4000/api/user`)
                .then(()=>{
                    sessionStorage.setItem("Account_Loeschung","Der Account wurde erfolgreich gelöscht.")
                    navigate('/cashbox/account_loeschung_erfolgreich');
                })
                .catch((error) => {
                    console.log("Not answer from the server." + error)
                })
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Logged-Attributs:', error);
        }
    }

    const goToMainPage = () =>{
        navigate( '/cashbox/hauptmenu');
    }

    return(
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="py-80">
                <div className="bg-neutral-100 mx-4 border-amber-800 ml-auto mr-auto rounded-2xl p-4 w-fit pl-6 pr-6">
                    <h1 className="text-xl text-center">Wollen Sie wirklich Ihren Account löschen?</h1>
                    <div className="flex flex-grow mx-20">
                        <button id='ok' className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-40 hover:bg-emerald-200 border-b-emerald-200"
                                onClick={() => {
                                    deleteAccount();
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

export default AccountDelete