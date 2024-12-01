import IconEinzahlung from "../pictures/einzahlung.png"
import "../components_css/einzahlung.css"

function Einzahlung() {
    return (
        <div className="flex flex-col bg-blue-400 h-dvh" id="mainscreen">
            <div className="mt-10">
                <div className="w-96 mt-28 ml-auto mr-auto mb-10">
                    <img src={IconEinzahlung} style={{width: '150px', height: '150px', marginLeft: "130px"}}
                         alt="Geld einzahlen"/>
                </div>
                <div className="text-lg w-96 ml-auto mr-auto mt-30">
                    <div>
                        <div>
                            <input
                                type="String"
                                style={{
                                    width: "383px",
                                    marginLeft: "1px",
                                    padding: "6px",
                                    textAlign: "right",
                                    outline: "none"}}/>
                        </div>
                    </div>
                    <div className="p-1 py-2 text-center font-bold ml-auto mr-auto bg-green-200 mt-5 hover:rounded-3xl">
                        <button>einzahlen</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Einzahlung;