import IconAuszahlung from "../pictures/auszahlung.webp"
import "../components_css/einzahlung.css"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Auszahlung() {

    const [neuerAuszahlungsBetrag, setNeuerAuszahlungsBetrag] = useState("");

    const navigate = useNavigate();

    function isNumeric(str) {
        return /^[0-9]+$/.test(str); // Prüft, ob der String nur aus Ziffern besteht
    }

    function handelAuszahlung(event) {
        event.preventDefault();

        if (!neuerAuszahlungsBetrag) {
            alert("Es wurde keine Eingabe getätigt.")
        } else if (!isNumeric(neuerAuszahlungsBetrag)) {
            alert("Die Eingabe ist ungültig.")
        } else {
            axios.patch(`http://localhost:4000/api/cash/payout/`,
                { neuerAuszahlungsbetrag: neuerAuszahlungsBetrag },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            )
                .then(() => {
                    navigate(`/cashbox/einzahlung_laeuft`);
                })
                .catch((error) => {
                    alert("Die Verbindung zum Server ist fehlgeschlagen.");
                });
        }
    }


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
                    <div onClick={(e) => handelAuszahlung(e)}
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