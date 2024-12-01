import IconUser from "../pictures/user2.png"
import "../components_css/einzahlung.css"
import {Link} from "react-router-dom";
import "../components_css/UserDataView.css"

function User() {
    return (
        <div className="flex flex-col w-96 ml-auto mr-auto mt-16 bg-blue-100 rounded-2xl h-auto " id="mainscreen">
            <div className="mt-10">
                <div className="w-96 mt-4 ml-auto mr-auto mb-10">
                    <img src={IconUser} style={{width: '150px', height: '150px', marginLeft: "120px"}}
                         alt="Geld einzahlen"/>
                </div>
                <div className="pl-4 pt-5 mt-11 mb-10 border-2 ml-auto mr-auto border-black w-80 rounded-3xl">
                    <div className="mb-5">
                        Vorname:
                    </div>
                    <div className="mb-5">
                        Nachname:
                    </div>
                    <div className="mb-5">
                        Mobile:
                    </div>
                    <div className="mb-5">
                        Registriert seit:
                    </div>
                </div>
            </div>
            <Link to='/cashbox/final/hauptmenu'>
                <div className="p-2 text-center w-96 ml-auto mr-auto mt-3 font-bold bg-blue-200 hover:counter-pointer">
                    <button>zurück</button>
                </div>
            </Link>
        </div>
    )
}

export default User;