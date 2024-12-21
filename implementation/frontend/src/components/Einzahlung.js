import IconEinzahlung from "../pictures/einzahlung.png"
import "../components_css/einzahlung.css"
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Einzahlung() {
    const [neuerbetrag, setneuerBetrag] = useState("");
    const [einzahlungFailed, setEinzahlungFailed] = useState(false);
    const [einzahlung_error, setEinzahlung_error] = useState("");
    const navigate = useNavigate();

    function isNumeric(str) {
        return /^[0-9]+$/.test(str); // Prüft, ob der String nur aus Ziffern besteht
    }

    function handelCancle(){
        navigate(`/cashbox/hauptmenu`);
    }

    function handelEinzahlung(event) {
        event.preventDefault();
        if (!neuerbetrag) {
            alert("Es wurde keine Eingabe getätigt.")
        } else if (!isNumeric(neuerbetrag)) {
            alert("Die Eingabe ist ungültig.")
        } else {
            axios.patch(`http://localhost:4000/api/cash/change/`,
                { neuerBetrag: neuerbetrag },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            )
                .then(() => {
                    navigate(`/cashbox/einzahlung_laeuft`);
                })
                .catch((error) => {
                    setEinzahlungFailed(true);
                    setEinzahlung_error("Die Verbindung zum Server ist fehlgeschlagen.");
                });
        }
    }

    return (
        <div className="flex flex-col bg-blue-400 h-dvh" id="mainscreen">
            <div className="mt-32">
                <div className="w-96 mt-28 ml-auto mr-auto mb-10">
                    <img
                        src={IconEinzahlung}
                        style={{width: '150px', height: '150px', marginLeft: "130px"}}
                        alt="Geld einzahlen"
                    />
                </div>
                <div className="text-lg w-96 ml-auto mr-auto mt-30">
                    <div>
                        <input
                            type="text" // Korrigiere den Input-Typ zu 'text'
                            id="einzahlung"
                            name="einzahlung"
                            value={neuerbetrag}
                            onChange={(e) => setneuerBetrag(e.target.value)}
                            style={{
                                width: "383px",
                                marginLeft: "1px",
                                padding: "6px",
                                textAlign: "right",
                                outline: "none"
                            }}
                        />
                    </div>
                    <div
                        onClick={handelEinzahlung}
                        className="p-1 py-2 text-center font-bold ml-auto mr-auto bg-green-200 mt-5 hover:rounded-3xl cursor-pointer"
                    >
                        einzahlen
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


export default Einzahlung;