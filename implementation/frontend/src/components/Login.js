import '../components_css/animationToRight.css'
import MainIcon from "./MainIcon";
import TopicLogin from "./TopicLogin";
import InputfeldLogin from "./InputfeldLogin";
import FrageNochKeinAccount from "./FrageNochKeinAccount";
import FragePasswortVergessen from "./FragePasswortVergessen";
import {useLocation} from "react-router-dom";

/**
 * Represent the Login of the system
 * @returns {JSX.Element} the login area to identificate hisself
 */
export default function Login(){

    const location = useLocation();
    const verbindungsart = location.state?.message;

    return (

        <div className="bg-sky-300 h-dvh pt-40">

            <div className="flex flex-col justify-center bg-white w-fit p-10 ml-auto mr-auto rounded-3xl">

                <MainIcon/>

                <div className="w-full h-fit pt-20">
                    <TopicLogin/>
                    <InputfeldLogin message ={verbindungsart}/>
                </div>

                <div className="mt-5 italic">
                    <FrageNochKeinAccount/>
                    <FragePasswortVergessen message={verbindungsart}/>
                </div>

            </div>

        </div>

    )

}