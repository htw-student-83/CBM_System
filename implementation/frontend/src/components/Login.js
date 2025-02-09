import '../components_css/animationToRight.css'
import MainIcon from "./MainIcon";
import TopicLogin from "./TopicLogin";
import InputfeldLogin from "./InputfeldLogin";
import FrageNochKeinAccount from "./FrageNochKeinAccount";
import FragePasswortVergessen from "./FragePasswortVergessen";

/**
 * Represent the Login of the system
 * @returns {JSX.Element} the login area to identificate hisself
 */
export default function Login(){

    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');
    let verbindungsart = storedLocalAdress ? storedLocalAdress: storedIpAdress;

    return (

        <div className="bg-sky-300 h-dvh pt-40">

            <div className="flex flex-col justify-center bg-white w-fit p-10 ml-auto mr-auto rounded-3xl">

                <MainIcon/>

                <div className="w-full h-fit pt-20">
                    <TopicLogin/>
                    <InputfeldLogin/>
                </div>

                <div className="mt-5 italic">
                    <FrageNochKeinAccount/>
                    <FragePasswortVergessen message={verbindungsart}/>
                </div>

            </div>

        </div>

    )

}