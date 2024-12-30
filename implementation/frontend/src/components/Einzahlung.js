import IconEinzahlung from "../pictures/einzahlung.png"
import "../components_css/einzahlung.css"
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

function Einzahlung() {
    const [neuerbetrag, setneuerBetrag] = useState("");
    const navigate = useNavigate();


    /**
     * check, is the message only about numbers
     * @param str übergebener Wert
     * @returns true, if the value is only part from numbers
     */
    function isNumeric(str) {
        return /^[0-9]+$/.test(str);
    }

    /**
     * go back to the hauptmenu
     */
    function handelCancle(){
        navigate(`/cashbox/hauptmenu`);
    }

    /**
     * checks the input from a logged user
     * @param event
     */
    function checkInput(event) {
        event.preventDefault();

        if (!neuerbetrag) {
            alert("Es wurde keine Eingabe getätigt.")
        }else if (!isNumeric(neuerbetrag)) {
            alert("Die Eingabe ist ungültig.")
        }else{
            navigate('/cashbox/einzahlung/abfrage', { state: { message: neuerbetrag } });
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
                        onClick={checkInput}
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