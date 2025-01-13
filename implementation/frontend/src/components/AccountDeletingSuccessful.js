import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import IconProzessAccountDeletingErfolgreich from "../pictures/account_loeschung.png";

const AccountDeletingSuccessful = () => {

    const result_account_deleting = sessionStorage.getItem("Account_Loeschung")
    const navigate = useNavigate();


    useEffect(() => {
        setTimeout(() => {
            sessionStorage.removeItem("Account_Loeschung")
            navigate('/cashbox/login')
        },4000 )
    });

    return (

        <div className="flex flex-col bg-white h-dvh" id="mainscreen">
            <div className="flex flex-col mt-72">
                <img
                    src={IconProzessAccountDeletingErfolgreich}
                    alt="Erfolgreiche Registrierung"
                    className="ml-auto mr-auto  size-44"
                />
                <div className="text-lg w-fit ml-auto mr-auto mt-30">
                    <div className="p-1 py-2 text-center text-2xl font-bold ml-auto mr-auto mt-5">
                        <h1>{result_account_deleting}.</h1>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default AccountDeletingSuccessful;
