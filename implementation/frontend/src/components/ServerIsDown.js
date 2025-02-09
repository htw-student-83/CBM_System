import {useNavigate} from "react-router-dom";
import CrySmily from "../pictures/saidEmoji.jpg";
import React from "react";


/**
 * The page, which will be print when the server connection was failed.
 * @returns {Element}
 * @constructor
 */
const ServerDown = () => {

    const navigate = useNavigate();

    const goToServer_Connection = () =>{
        navigate('/cashbox/serverArt/');
    }

    const handleUserEvent = () =>{
        navigate('/cashbox/prozess_server_connection_laeuft');
    }

    return(
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="py-32">
                <div className="bg-white mx-4 border-amber-800 ml-auto mr-auto rounded-2xl p-4 w-fit pl-6 pr-6 pb-10">
                    <h1 className="text-2xl text-center">Ohhh...der Server scheint nicht erreichbar zu sein...</h1>
                    <div className="flex flex-grow mx-2 ml-26 pt-10">
                        <img src={CrySmily} style={{width: '250px', height: '250px', marginLeft: '130px'}}
                             alt="weinendes Smily"/>
                    </div>
                    <div
                        className="bg-sky-100 w-full flex justify-center p-3 0mt-5 mr-auto ml-auto cursor-pointer font-bold rounded-xl hover:bg-green-300"
                        onClick={handleUserEvent}>
                        verbinden
                    </div>
                    <div
                        className="bg-sky-100 w-full p-3 text-center mt-5 mr-auto ml-auto cursor-pointer font-bold rounded-xl hover:bg-amber-200"
                        onClick={goToServer_Connection}>
                        zurück
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServerDown