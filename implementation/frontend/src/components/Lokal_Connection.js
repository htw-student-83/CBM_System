import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Lokal_Connection = () => {

    const navigate = useNavigate();
    const goToServer_Connection = () =>{
        navigate('/cashbox/serverArt/');
    }

    const checkLokalerServer = async () => {
        try {
           await axios.get(`http://localhost:4000/api/user/localserver/status`)
               .then((response) => {
                   if(response.status === 200){
                       navigate('/cashbox/login');
                   }
               })
               .catch((error) => {
                   navigate('/cashbox/serverFail');
               });
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="py-60">
                <div className="bg-neutral-100 mx-4 border-amber-800 ml-auto mr-auto rounded-2xl p-4 w-fit pl-6 pr-6">
                    <h1 className="text-2xl text-center">Starten Sie bitte den lokalen Server...</h1>
                    <div className="flex flex-grow mx-20">
                        <button id='ok' className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-60 hover:bg-emerald-200 border-b-emerald-200"
                           onClick={checkLokalerServer}
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

export default Lokal_Connection