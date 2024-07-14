import {useEffect, useState} from "react";
import {FaCashRegister} from "react-icons/fa6";
import {CiMobile4} from "react-icons/ci";
import axios from "axios";
import Services_Success from "../components/process_successfully";
import Services_Fail from "./Service_failed";
import {useNavigate} from "react-router-dom";
import mobilecheck from '../components/mobileCheck'

/**
 * The component about password forgot
 * @returns {JSX.Element}
 * @constructor
 */
export default function PasswortVergessen(){

    const[mobile, setMobile] = useState("");
    const[error, setError] = useState("");
    const[content_for_sucessfully_process, setContent_for_sucessfully_process] = useState("");
    const[processSucessfully, setProcessSuccessfully] = useState(false);
    const[processFailed, setprocessFailed] = useState(false);
    const[loading, setLoading] = useState(false);

    const navigate = useNavigate();

    /**
     * handle the proces in case when the user forgot his password
     */
    const handlePasswordForgot = () => {
        if(!mobile) {
            handleFailedProcess("Please enter your mobile number!");
        }else if(mobilecheck.validationOfNumber(mobile)) {
            handleFailedProcess("Your mobile number is invalid");
        }else if(!mobilecheck.prefixcheck(mobile)) {
            handleFailedProcess("The prefix of your mobile number is unknown");
        }else{
            setLoading(true);
            setMobile({userNumber: mobile})
            axios.get(`/cashbox/api/users/data/${mobile}`)
                .then((response) => {
                    handleSuccessllyProcess("Password was sending successfully.")
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    handleFailedProcess()
                })
        }
    }

    /**
     *  print a message if the process was successfully
     */
    const handleSuccessllyProcess = (content) =>{
        setProcessSuccessfully(true)
        setContent_for_sucessfully_process(content);
        setTimeout(() => {
            setProcessSuccessfully(false);
            navigate('/cashbox/login');
        }, 4000)
    }


    /**
     * print a message if the process was failed
     * @param content the message
     */
    const handleFailedProcess = (content) =>{
        setprocessFailed(true);
        setError(content)
        setTimeout(() => {
            setprocessFailed(false);
        }, 3000)
    }
/*
    useEffect(() => {
        document.getElementById("mainscreen").style.display="none";
    }, []);

 */
    return(
        <div className="bg-sky-300 h-dvh pt-40">

            <div className="flex flex-col justify-center bg-white w-fit p-10  ml-auto mr-auto rounded-3xl">

                <div className="ml-auto mr-auto">
                    <FaCashRegister size={50}/>
                </div>

                <h1 className="text-xl mb-8 mt-5 italic font-bold text-center">Passwort vergessen</h1>

                <div className="w-fit h-fit">

                    <form>
                        <label className="text-base italic">Mobile:</label>
                        <div className="flex flex-row p-2 mt-2 border-2 border-gray-300">
                            <CiMobile4 size={25}/>
                            <input
                                type="text"
                                id="forgotpassword"
                                name="forgtpassword"
                                onChange={(e) => setMobile(e.target.value)}
                                className="ml-4 focus:outline-none"
                            />
                        </div>
                    </form>

                    <button
                        className="w-full h-fit bg-gray-300 p-2 mt-3 text-base font-bold hover:rounded-3xl hover:bg-green-300"
                        onClick={handlePasswordForgot}>Senden
                    </button>

                </div>

            </div>

            <div>
                {processFailed && (
                    <div className="componentFromLeftToRight">
                        <Services_Fail error={error}/>
                    </div>
                )}
            </div>

            <div>
                {processSucessfully && (
                    <div className="componentFromLeftToRight">
                        <Services_Success content={content_for_sucessfully_process}/>
                    </div>
                )}
            </div>

        </div>
    )

}