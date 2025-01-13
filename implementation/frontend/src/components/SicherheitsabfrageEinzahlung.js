import React from 'react';
import {useNavigate} from "react-router-dom";

const SicherheitsabfrageEinzahlung = () => {

    const navigate = useNavigate();

    const goToPayment = async () => {
        navigate(`/cashbox/einzahlung`);
    }

    function handelEinzahlung() {
        sessionStorage.setItem('Einzahlungsprozess','Der Einzahlungsprozess läuft...');
        navigate('/cashbox/prozess_einzahlung_auszahlung_laeuft');
    }

    return (
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="py-60">
                <div className="bg-neutral-100 mx-4 mt-11 border-amber-800 ml-auto mr-auto rounded-2xl p-4 w-fit pl-6 pr-6">
                    <h1 className="text-2xl text-center">Sie wollen <span className="font-bold">{sessionStorage.getItem("einzahlenderBetrag")}</span> € einzahlen?</h1>
                    <div className="flex flex-grow mx-20">
                        <button
                            id='ok'
                            className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-72 hover:bg-emerald-200 border-b-emerald-200"
                            onClick={handelEinzahlung}
                        >ok
                        </button>
                        <button
                            className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-3/5 hover:bg-neutral-200 border-b-emerald-200"
                            onClick={() => {goToPayment();}}
                        >abbrechen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SicherheitsabfrageEinzahlung;
