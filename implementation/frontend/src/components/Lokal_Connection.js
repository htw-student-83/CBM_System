import {useNavigate} from 'react-router-dom'

const Lokal_Connection = () => {
    const navigate = useNavigate();

    const goToServer_Connection = () =>{
        navigate('/cashbox/serverArt/');
    }

    const handleLocalhost = () => {
        sessionStorage.setItem("Verbindung_local_im_Aufbau", "Die Verbindung zum localen Server wird aufgebaut...");
        navigate('/cashbox/prozess_server_connection_laeuft');
    }

    return(
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="py-72">
                <div className="bg-neutral-100 mx-4 border-amber-800 ml-auto mr-auto rounded-2xl pt-6 p-4 w-fit">
                    <h1 className="text-xl text-center">Starte bitte den Server.</h1>
                    <div className="flex flex-grow mx-20">
                        <button id='ok' className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-36 hover:bg-emerald-200 border-b-emerald-200"
                           onClick={handleLocalhost}
                        >ok
                        </button>
                        <button className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-36 hover:bg-amber-200 border-b-emerald-200"
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

export default Lokal_Connection