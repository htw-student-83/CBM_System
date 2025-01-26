import IconAuszahlung from "../pictures/auszahlung.webp"
import "../components_css/einzahlung.css"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import { inputcheck } from "./Inputcheck";


/**
 * the component to manage the payout process
 * @returns {JSX.Element}
 * @constructor
 */
function Auszahlung() {

    const [neuerAuszahlungsBetrag, setNeuerAuszahlungsBetrag] = useState("");
    const navigate = useNavigate();


    /**
     * checks the input from a logged user
     * @param event
     */
    function checkInput(event) {
        event.preventDefault();
        if (!neuerAuszahlungsBetrag) {
            alert("Es wurde keine Eingabe getätigt.")
        }else if (!inputcheck(neuerAuszahlungsBetrag)) {
            alert("Die Eingabe ist ungültig.")
        }else{
            sessionStorage.setItem("auszahlenderBetrag",neuerAuszahlungsBetrag);
            navigate('/cashbox/auszahlung/abfrage');
        }
    }

    /**
     * go back to the hauptmenu
     */
    function handelCancle(){
        navigate(`/cashbox/hauptmenu`);
    }

    return (
        <div className="flex flex-col bg-blue-500 h-dvh" id="mainscreen">
            <div className="mt-32">
                <div className="w-96 mt-28 ml-auto mr-auto mb-10">
                    <img src={IconAuszahlung} style={{width: '150px', height: '150px', marginLeft: "120px"}}
                         alt="Geld einzahlen"/>
                </div>
                <div className="text-lg w-96 ml-auto mr-auto mt-30">
                    <div>
                        <div>
                            <input
                                type="String"
                                onChange={(e) => setNeuerAuszahlungsBetrag(e.target.value)}
                                style={{
                                    width: "383px",
                                    marginLeft: "1px",
                                    padding: "6px",
                                    textAlign: "right",
                                    outline: "none"
                                }}/>
                        </div>
                    </div>
                    <div onClick={(e) => checkInput(e)}
                        className="p-1 py-2 text-center font-bold ml-auto mr-auto bg-green-200 mt-5 hover:rounded-3xl cursor-pointer">
                        <button>auszahlen</button>
                    </div>
                    <div
                        onClick={handelCancle}
                        className="p-1 py-2 text-center font-bold ml-auto mr-auto bg-orange-200 mt-5 hover:rounded-3xl cursor-pointer"
                    >
                        abbrechen
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auszahlung;