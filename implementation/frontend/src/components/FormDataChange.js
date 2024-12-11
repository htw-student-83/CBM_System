import React, { useState } from "react";
import "../components_css/datachange.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";

function DataChange() {
    const [updateData, setUpdateData] = useState({
        nachname: '',
        mobile: '',
    });

    const [isModalOpen, setModalOpen] = useState(true);
    const [selectedOption, setSelectedOption] = useState("Nachname");
    const [inputValue, setInputValue] = useState("");

    const navigate = useNavigate();

    const handleCancel = () => {
        setModalOpen(false); // Formular nach dem Abbrechen schließen
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setInputValue(""); // Reset input when changing option
    };

    const handleInputChange = async (event) => {
        setInputValue(event.target.value);
            const { name, value } = event.target;
            setUpdateData(prevData => ({
                ...prevData,
                [name]: value
            }));

        setUpdateData(updateData);
        try {

            await axios.patch(`http://localhost:4000/api/user/change/profil`, updateData,{
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(()=>{
                    navigate('/cashbox/hauptmenu/');
                })
                .catch((error) => {
                    console.log("Not answer from the server." + error)
                })
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Logged-Attributs:', error);
        }

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!updateData.nachname)
        handleSubmit(event);
        //setModalOpen(false); // Formular nach dem Absenden schließen
    };


    return (
                <div>
                    {isModalOpen ? (
                        <div className="modal">
                            <form className="flex flex-col gap-4 bg-gray-200 py-10 px-14 rounded-xl">
                                <h1 className="large-text">Datenänderung</h1>
                                <div className="flex flex-grow">
                                    <select value={selectedOption} onChange={handleOptionChange}
                                            style={{padding: "0.5rem"}}>
                                        <option value="Nachname">Nachname</option>
                                        <option value="Mobile">Mobile</option>
                                    </select>
                                    <input type="text" value={inputValue} onChange={handleInputChange}
                                           className="border p-2"/>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleInputChange}
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
                    ):("")}
                </div>
    );
}

export default DataChange;

