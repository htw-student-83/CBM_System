import IconEinzahlung from "../pictures/einzahlung.png"
import "../components_css/einzahlung.css"
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Einzahlung() {
    const[neuerbetrag, setneuerBetrag] = useState("");
    const[einzahlung_error, setEinzahlung_error] = useState("");
    const[loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handelEinzahlung(event) {
        event.preventDefault();

        if (!neuerbetrag) {
            setEinzahlung_error("The input filed doesn't keep empty.");
        }else{
            console.log("Gespeicherter Wert" , neuerbetrag)
            setLoading(true);
            axios.patch(`http://localhost:4000/api/cash/change/`,
                {kassenstand: neuerbetrag},
                { headers: {
                        'Content-Type': 'application/json',
                     },
            })
                .then(data => console.log("übergebener Wert:" , data))
                .then(() => {
                    setLoading(false)
                    navigate('/cashbox/hauptmenu');
                })
                .catch((error) => {
                    setEinzahlung_error("The server connection is failed.");
                })
        }
    }

    return (
        <div className="flex flex-col bg-blue-400 h-dvh" id="mainscreen">
            <div className="mt-32">
                <div className="w-96 mt-28 ml-auto mr-auto mb-10">
                    <img src={IconEinzahlung} style={{width: '150px', height: '150px', marginLeft: "130px"}}
                         alt="Geld einzahlen"/>
                </div>
                <div className="text-lg w-96 ml-auto mr-auto mt-30">
                    <div>
                        <div>
                            <input
                                type="String"
                                id="einzahlung"
                                name="einzahlung"
                                value={neuerbetrag}
                                onChange={(e) => setneuerBetrag(e.target.value)}

                                style={{
                                    width: "383px",
                                    marginLeft: "1px",
                                    padding: "6px",
                                    textAlign: "right",
                                    outline: "none"}}/>
                        </div>
                    </div>
                    <div className="p-1 py-2 text-center font-bold ml-auto mr-auto bg-green-200 mt-5 hover:rounded-3xl cursor-pointer">
                        <button
                            onClick={(e) => handelEinzahlung(e)}>
                            einzahlen
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Einzahlung;