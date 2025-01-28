import {useState} from "react";
import '../components_css/animationToRight.css'
import axios from 'axios'
import mobileInputCheck from './CheckInputForLogin'
import LabelNameRegistration from "./LabelNameRegistration";
import LabelVornameRegistration from "./LabelVornameRegistration";
import LabelMobileRegistration from "./LabelMobileRegistration";
import IconNameInputfeldRegistration from "./IconNameInputfeldRegistration";
import IconMobileInputfeldRegistration from "./IconMoibileInputfeldRegistration";
import FrageBereitsRegistriert from "./FrageBereitsRegistriert";
import {useNavigate} from "react-router-dom";
import MainIcon from "./MainIcon";
import { startsWithUpperCaseAndMinLength } from "./CheckInputForRegistration";


/**
 * The component handles the whole registration
 * @returns {JSX.Element}
 * @constructor
 */
export default function HandelRegistrierung(){

    const navigate = useNavigate();
    //Message for payment and payout is working
    const storedLocalAdress = sessionStorage.getItem('localAddress');
    const storedIpAdress = sessionStorage.getItem('ipServer');

    let verbindungstyp = storedLocalAdress ? storedLocalAdress : storedIpAdress;

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
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!formData.vorname || !formData.nachname || !formData.mobile){
            alert("Du hast nicht alle Felder ausgefüllt.");
            navigate('/cashbox/user/registrierung')
        }else if(!startsWithUpperCaseAndMinLength(formData.vorname) || !startsWithUpperCaseAndMinLength(formData.nachname)) {
            alert("Entweder kein Großbuchstaben verwendet oder dein Name ist zu kurz.");
            navigate('/cashbox/user/registrierung')
        }else if(!mobileInputCheck.validationOfNumber(formData.mobile)) {
            alert("Die eigetragene Handynummer ist ungültig.");
            navigate('/cashbox/user/registrierung')
        }else if(await alreadyRegistered(formData.mobile)) {
            alert(" Du bist bereits registiert.");
        }else{
            const password = createPasswort();
            const updatedFormData = {
                ...formData,
                password: password
            };
            setFormData(updatedFormData);
            alert("Passwort: " + password);
            axios.post(`http://${verbindungstyp}:4000/api/user/newuser`, updatedFormData,{
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response =>{
                    if (response.status === 201) {  // Check for successful status code
                        sessionStorage.setItem("Registrierung erfolgreich","Die Registrierung war erfolgreich")
                        handleSuccessfullyRegistration();
                        makeFieldsEmpty();
                    }
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    };

    /**
     * handle the case if the user is already registered
     * @returns {Promise<boolean>} true if the user is known otherwise false
     */
    const alreadyRegistered = async (mobile) => {
        try {
            const response = await axios.get(`http://${verbindungstyp}:4000/api/user/check/${mobile}`);
            return response.status === 200;
        }catch (error) {
            console.log("Das ist die Antwort: ", error.response);
        }
    }

    /**
     * create a new password
     * @returns {string} a new password
     */
    function createPasswort (){
        const pattern = "10000";
        var randomnumber = (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000).toString();
        return pattern + randomnumber;
    }


    /**
     * makes the input fields empty
     */
    function makeFieldsEmpty(){
        const inputs = document.querySelectorAll('input');
        // Den Inhalt jedes Input-Feldes auf leer setzen
        inputs.forEach(input => {
            input.value = '';
        });
    }

    /**
     * print the message if the registration was sucessfully
     */
    const handleSuccessfullyRegistration = () => {
        navigate('/cashbox/user/registrierung_erfolgreich')
    }


    return(
        <div className="bg-sky-200 h-dvh pt-32">
            <div className="flex flex-col justify-center bg-white w-fit p-6 pt-10  ml-auto mr-auto rounded-3xl border-2 border-sky-300
            shadow-[0px_6px_3px_rgba(5,0,0,0.3)]">

                <MainIcon/>

                <div className="w-fit h-fit mt-14">

                    <form>

                        <div className="mb-3">
                            <LabelVornameRegistration/>
                            <div className="flex flex-row p-1.5 mt-1 border-2 border-gray-300">
                                <IconNameInputfeldRegistration/>
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
                            <LabelNameRegistration/>
                            <div className="flex flex-row p-1.5 mt-1 border-2 border-gray-300">
                                <IconNameInputfeldRegistration/>
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
                            <LabelMobileRegistration/>
                            <div className="flex flex-row p-1.5 mt-1 border-2 border-gray-300">
                                <IconMobileInputfeldRegistration/>
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
                        className="w-full h-fit bg-orange-300 p-2 text-lg font-bold hover:rounded-3xl hover:bg-orange-300"
                        onClick={handleSubmit}>Registrieren
                    </button>

                    <div className="text-xs pt-3 italic">
                        <FrageBereitsRegistriert/>
                    </div>

                </div>

            </div>

        </div>
    )
}
