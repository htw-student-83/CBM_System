import React, {useState} from "react";
import "../components_css/datachange.css"
import memoryStorage from './memoryStorage'
import {useNavigate} from "react-router-dom";

/**
 * the component handle the process if stored data must be changed
 * @constructor
 */
const DataChange = () => {

    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("Nachname");
    const [inputValue, setInputValue] = useState("");

    const [updateData, setUpdateData] = useState({
        nachname: '',
        mobile: '',
    });

    const handleCancel = () => {
        navigate('/cashbox/hauptmenu');
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setInputValue(""); // Reset input when changing option
    };

    const handleInputChange = (event) => {
        const { value } = event.target;

        setInputValue(value); // Aktualisiert den Eingabewert

        // Dynamisches Aktualisieren von `updateData`
        setUpdateData((prevData) => ({
            ...prevData,
            [selectedOption.toLowerCase()]: value, // Aktualisiert entweder "nachname" oder "mobile"
        }));
    };


    //Für regulären Ausdruck aus min. 2. Buchstaben
    const nameRegex = /^[A-Za-zÄÖÜäöüß]{2,}$/;

    // Regex: Erlaubt + am Anfang, danach nur Zahlen, Leerzeichen oder Bindestriche
    const phoneRegex = /^(\+?[0-9\- ]+)$/

    const handleSubmit = async (event) => {
        event.preventDefault();
        const dataToUpdate = {};
        // prüft, ob überhaupt eine Eingabe getätigt wurde
        if(!inputValue){
            alert("Du hast keine Eingabe gemacht.");
        }else if (selectedOption === "Nachname" && updateData.nachname.trim()) {
            // prüft, ob es sich um einen gültigen Namen handelt
            if (!nameRegex.test(updateData.nachname)) {
                alert("Deine Eingabe ist ungültig.");
            }else{
                dataToUpdate.nachname = updateData.nachname;
                memoryStorage.set('user',dataToUpdate);
                sessionStorage.setItem("Datenaenderung","Die Daten werden geändert...");
                navigate('/cashbox/prozess_einzahlung_auszahlung_laeuft');
            }
        }else if (selectedOption === "Mobile" && updateData.mobile.trim()) {
            // prüft, ob überhaupt eine gültige Nummer eingegeben wurde
            if (!phoneRegex.test(updateData.mobile)) {
                alert("Deine Eingabe ist ungültig.");
            }else{
                dataToUpdate.mobile = updateData.mobile;
                memoryStorage.set('user', dataToUpdate);
                sessionStorage.setItem("Datenaenderung","Die Daten werden geändert...");
                navigate('/cashbox/prozess_einzahlung_auszahlung_laeuft');
            }
        }else {
            return ""; // Abbrechen, wenn kein gültiger Wert vorhanden ist
        }

    };


    return (
        <div className="flex flex-col bg-blue-400 h-dvh">
            <div className="modal">
                <form className="flex flex-col gap-4 bg-gray-200 py-10 px-14 rounded-xl">
                    <h1 className="large-text">Datenänderung</h1>
                    <div className="flex flex-grow">
                        <select value={selectedOption} onChange={handleOptionChange}
                                style={{padding: "0.5rem"}}>
                            <option value="Nachname">Nachname</option>
                            <option value="Mobile">Mobile</option>
                        </select>
                        <input type="text"
                               name={selectedOption.toLowerCase()}
                               value={inputValue}
                               onChange={handleInputChange}
                               className="border p-2"/>
                    </div>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-gray-400 font-bold p-2 mt-3 cursor-pointer hover:rounded-full">
                        ändern
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-sky-300 font-bold p-2 mt-3 cursor-pointer hover:rounded-full">
                        abbrechen
                    </button>
                </form>
            </div>
        </div>
    );
}

export default DataChange;

