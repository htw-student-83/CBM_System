import {useLocation, useNavigate} from 'react-router-dom'
import axios from "axios";

const Lokal_Connection = () => {

    const location = useLocation();
    const localAddress = location.state?.message;
    const navigate = useNavigate();

    const goToServer_Connection = () =>{
        navigate('/cashbox/serverArt/');
    }

    const checkLokalerServer = async () => {
        try {
           await axios.get(`http://${localAddress}:4000/api/server/localserver`)
               .then((response) => {
                   if(response.status === 200){
                       navigate('/cashbox/login',{ state: { message: localAddress }});
                   }
               })
               .catch((error) => {
                   navigate('/cashbox/serverFail',{ state: { message: localAddress }});
               });
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="py-72">
                <div className="bg-neutral-100 mx-4 border-amber-800 ml-auto mr-auto rounded-2xl pt-6 p-4 w-fit">
                    <h1 className="text-xl text-center">Starte bitte den Server.</h1>
                    <div className="flex flex-grow mx-20">
                        <button id='ok' className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-36 hover:bg-emerald-200 border-b-emerald-200"
                           onClick={checkLokalerServer}
                        >ok
                        </button>
                        <button className="bg-white text-lg rounded-2xl p-2 mx-10 my-6 h-14 w-36 hover:bg-neutral-200 border-b-emerald-200"
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