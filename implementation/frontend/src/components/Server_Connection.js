import { useNavigate } from 'react-router-dom'

const Server_Connection = () => {
    const ip_address = "192.168.178.23"
    const local_address = "localhost"

    const navigate = useNavigate();

    const goToTCPServer = () =>{
        console.log("Übertragene IP: " + ip_address)
        navigate('/cashbox/serverArt/tcp', { state: { message: ip_address }});
    }

    const goToLocalServer = () =>{
        console.log("Übertragene IP: " + local_address)
        navigate('/cashbox/serverArt/lokal', { state: { message: local_address }});
    }

    return(
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="py-60">
                <div className="bg-neutral-100 mx-4 border-amber-800 ml-auto mr-auto rounded-2xl p-4 w-fit pl-6 pr-6">
                    <h1 className="text-2xl text-center">Soll der locale Server für das Kassensystem verwendet werden?</h1>
                    <div className="flex flex-grow mx-20">
                        <button id='tcp' className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-2/6 hover:bg-emerald-200 border-b-emerald-200"
                            onClick={() => {
                                goToLocalServer();
                            }}
                        >Ja</button>
                         <button className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-2/6  hover:bg-amber-200 border-amber-600"
                             onClick={() => {
                                 goToTCPServer();
                             }}
                        >Nein</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Server_Connection