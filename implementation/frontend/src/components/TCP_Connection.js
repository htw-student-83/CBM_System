import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const TCP_Connection = () => {

    const location = useLocation();
    const [ipServer, setipServer] = useState('');
    const navigate = useNavigate();

    const goToServer_Connection = () =>{
        navigate('/cashbox/serverArt/');
    }

    const handleRemoteServer = () => {
        sessionStorage.setItem("message_evaluation_is_working", "Die Verbindung zum remote Server wird aufgebaut...");
        navigate('/cashbox/prozess_laeuft');
    }

    useEffect(() => {
        const storedAddress = sessionStorage.getItem('ipServer');
        const newAddress = location.state?.message;
        if (newAddress) {
            setipServer(newAddress);
            sessionStorage.setItem('ipServer', newAddress);
        } else if (storedAddress) {
            setipServer(storedAddress);
        }
    }, [location.state?.message]);

    return(
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="py-72">
                <div className="bg-neutral-100 mx-4 border-amber-800 ml-auto mr-auto rounded-2xl py-5 w-fit pl-10 pr-10">
                    <h1 className="text-xl text-center py-3">Starte bitte den Server auf dem anderen Rechner.</h1>
                    <div className="flex flex-grow px-2">
                        <button id='ok' className="bg-white w-52 text-lg rounded-2xl p-2 mx-10 my-4 h-14 hover:bg-emerald-200 border-b-emerald-200"
                            onClick={handleRemoteServer}
                        >ok
                        </button>
                        <button className="bg-white w-52 text-lg rounded-2xl p-2 mx-10 my-4 h-14 hover:bg-amber-200 border-b-emerald-200"
                            onClick={() => {
                              goToServer_Connection();
                            }}
                        >zurück</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TCP_Connection;