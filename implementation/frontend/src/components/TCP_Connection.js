import {useNavigate} from "react-router-dom";
import axios from "axios";

const TCP_Connection = () => {

    const navigate = useNavigate();
    const goToServer_Connection = () =>{
        navigate('/cashbox/serverArt/');
    }

    const connectToTCPServer = async () => {
         try {
            const response = await axios.get(`http://192.168.178.23:4000/api/server/tcpserver/status`);
            if(response.status === 200){
                navigate('/cashbox/login');
            }
        } catch (error) {
            console.error(error);
        }

    }

    return(
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="py-80">
                <div className="bg-neutral-100 mx-4 border-amber-800 ml-auto mr-auto rounded-2xl py-10 w-fit pl-10 pr-10">
                    <h1 className="text-xl text-center">Starten Sie bitte den Server auf dem anderen Rechner...</h1>
                    <div className="flex flex-grow mx-20">
                        <button id='ok' className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-2/6 hover:bg-emerald-200 border-b-emerald-200"
                            onClick={connectToTCPServer}
                        >ok
                        </button>
                        <button className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-3/5 hover:bg-neutral-200 border-b-emerald-200"
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