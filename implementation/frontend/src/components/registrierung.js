import {useEffect, useState} from "react";
import { FaCashRegister } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { CiMobile4 } from "react-icons/ci";
import {Link, useNavigate} from "react-router-dom";
import Registration_Success from "../components/registration_successfully";
import '../components_css/animationToRight.css'
import axios from 'axios'
import Registration_Failed from "../components/registration_failed";
import mobilecheck from '../components/mobileCheck'
import namecheck from '../components/nameCheck'

export default function Registrierung(){

    const[contentforsuccess, setContentforSuccess] = useState("");
    const[registrierungSucessfully, setRegistrierungSuccessfully] = useState(false);
    const[registrierungFailed, setRegistrierungFailed] = useState(false);
    const[error, setError] = useState("");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        vorname: '',
        nachname: '',
        mobile: '',
        password: '',
        logged: false,
    });

    /**
     * to update the object of a new user after his input
     * @param e event
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    /**
     * handle the process after the user entered his data.
     * @param e keep all data
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.vorname || !formData.nachname || !formData.mobile){
            setError("One or more fields are empty.")
            handleFailRegistration();
        }else if(!namecheck.checkNameValues(formData.vorname) || !namecheck.checkNameValues(formData.nachname)) {
            setError("Something with your inputs are wrong. Please check!");
            handleFailRegistration();
        }else if(!namecheck.checkCapitalLetter(formData.vorname) || !namecheck.checkCapitalLetter(formData.nachname)) {
            setError("Your name doesn't start with a capital letter.");
            handleFailRegistration();
        }else if(mobilecheck.validationOfNumber(formData.mobile)) {
            setError("Your phone number is invalid.");
            handleFailRegistration();
        }else if(!mobilecheck.prefixcheck(formData.mobile)) {
            setError("The prefix of your phone number is unknown.");
            handleFailRegistration();
        }else{
            const password = createPasswort();
            const updatedFormData = {
                ...formData,
                password: password
            };

            setFormData(updatedFormData);
            axios.post('/cashbox/api/users/', updatedFormData)
                .then(function (response) {
                    sendingWelcomeMessage(updatedFormData.mobile);
                })
                .catch((error) => {
                    setError(error.message);
                    handleFailRegistration();
                })
        }
    };

    /**
     * handle the case if the user is already registered
     * @returns {Promise<boolean>} true if the user is known otherwise false
     */
    const alreadyRegistered = async (mobile) => {
        var isRegistered = false;
        await axios.get(`/cashbox/api/users/usercheck/${mobile}`)
            .then((response) =>{
                if(response.status === 200){
                    isRegistered = true;
                }
            })
            .catch((error) => {
                handleFailRegistration("Not answer from the server." + error.message);
            })
        return isRegistered;
    }


    /**
     * handle the process of a successful registration
     * @param mobile
     */
    const sendingWelcomeMessage = (mobile) =>{
        axios.get(`/cashbox/api/users/registration/welcomemessage/${mobile}`)
            .then((response) =>{
                handleSuccessfullyRegistration()
                setFormData({vorname: "",  nachname: "", mobile: ""});
            })
            .catch((error) => {
                setError("The registration was failed.")
                handleFailRegistration();
            })
    }
/*
    useEffect(() => {
        document.getElementById("mainscreen").style.display="none";
    }, []);

 */


    /**
     * create a new password
     * @returns {string} a new password
     */
    function createPasswort (){
        const pattern = "10000";
        //Intervall von 10000 - 99999
        var randomnumber = (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000).toString();
        var newPassword = pattern + randomnumber;
        return newPassword;
    }

    /**
     * print the message if the registration was sucessfully
     */
    const handleSuccessfullyRegistration = () => {
        setRegistrierungSuccessfully(true);
        setContentforSuccess("The registration was successfully");
        setTimeout(() => {
            setRegistrierungSuccessfully(false);
            navigate('/cashbox/login');
        }, 3000)
    }

    /**
     * print the message if the registration was failed
     */
    const handleFailRegistration = () =>{
        setRegistrierungFailed(true);
        setTimeout(() => {
            setRegistrierungFailed(false);
           // navigate('/cashbox/login');
        }, 3000)
    }


    return(

        <div className="bg-sky-200 h-dvh pt-32">

            <div className="flex flex-col justify-center bg-white w-fit p-6  ml-auto mr-auto rounded-3xl border-2 border-sky-300
            shadow-[0px_6px_3px_rgba(5,0,0,0.3)]">

                <div className="ml-auto mr-auto">
                    <FaCashRegister size={40}/>
                </div>

                <h1 className="text-xl mb-4 mt-5 italic font-bold text-center">Registrierung</h1>

                <div className="w-fit h-fit">

                    <form>

                        <div className="mb-3">
                            <label className="text-sm italic">Vorname:</label>
                            <div className="flex flex-row p-1.5 mt-1 border-2 border-gray-300">
                                <IoPersonOutline size={20}/>
                                <input
                                    type="text"
                                    id="vorname"
                                    name="vorname"
                                    value={formData.vorname}
                                    onChange={handleInputChange}
                                    className="ml-4 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="text-sm italic">Nachname:</label>
                            <div className="flex flex-row p-1.5 mt-1 border-2 border-gray-300">
                                <IoPersonOutline size={20}/>
                                <input
                                    type="text"
                                    id="nachname"
                                    name="nachname"
                                    value={formData.nachname}
                                    onChange={handleInputChange}
                                    className="ml-4 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="text-sm italic">Mobile:</label>
                            <div className="flex flex-row p-1.5 mt-1 border-2 border-gray-300">
                                <CiMobile4 size={20}/>
                                <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className="ml-4 focus:outline-none"
                                />
                            </div>
                        </div>

                    </form>

                    <button
                        className="w-full h-fit bg-orange-300 p-2 text-xs font-bold hover:rounded-3xl hover:bg-orange-300"
                        onClick={handleSubmit}>Registrieren
                    </button>

                    <div className="text-xs pt-3 italic">
                        <p>Bereits registriet?
                            <Link to='/cashbox/login'>
                                <span
                                    className="font-mono underline-offset-2 hover: cursor-pointer"> Login
                                </span>
                            </Link>
                        </p>
                    </div>

                </div>

            </div>

            <div>
                {registrierungSucessfully && (
                    <div className="componentFromLeftToRight">
                        <Registration_Success content={contentforsuccess}/>
                    </div>
                )}
            </div>

            <div>
                {registrierungFailed && (
                    <div className="componentFromLeftToRight">
                        <Registration_Failed error={error}/>
                    </div>
                )}
            </div>

        </div>
    )
}