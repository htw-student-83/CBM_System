import { Link } from "react-router-dom"
import { PiHandDeposit } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { IoLogOutOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import ViewLogged from "./ViewLogged.js";
import {FaCashRegister} from "react-icons/fa";
import Cash from "./ViewCurrentCashStand";

function Mainmenu({id}) {
    return (
        <div className="bg-blue-400 h-screen overflow-hidden" id="mainscreen">

            {/* Wasserzeichen im Hintergrund */}
            <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none z-0">
                <FaCashRegister size={650} className="text-gray-100" />
            </div>

            <div className="flex flex-grow justify-between mr-10 p-5 font-mono">
                <ViewLogged/>
                <Cash/>
            </div>

            <div className="flex flex-grow justify-center bg-blue-400">
                <div className="flex flex-col mt-52 ml-0 bg-blue-400">
                    <Link to='/cashbox/einzahlung'>
                        <div
                            className="flex flex-grow text-xl mb-7 p-3 w-full justify-center rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <PiHandDeposit size={25}/>
                            </div>
                            <div className="mt-1">
                                Einzahlung
                            </div>
                        </div>
                    </Link>

                    <Link to={'/cashbox/auszahlung'}>
                        <div
                            className="flex flex-grow text-xl justify-center mb-7 p-3 w-96  rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <GiReceiveMoney size={25}/>
                            </div>
                            <div className="mt-1">
                                Auszahlung
                            </div>
                        </div>
                    </Link>

                    <Link to='/cashbox/userdataview'>
                        <div
                            className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <MdChangeCircle size={25}/>
                            </div>
                            <div className="mt-1">
                                Meine Daten ändern
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col  pl-5 mt-52 bg-blue-400 h-dvh" id="mainscreen">
                    <Link to='/cashbox/userdataview'>
                        <div className="flex flex-grow justify-center text-xl mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <ImProfile size={25}/>
                            </div>
                            <div className="mt-1">
                                Meine Daten
                            </div>
                        </div>
                    </Link>

                    <Link to={`/cashbox/logout/${id}`}>
                        <div
                            className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <IoLogOutOutline size={25}/>
                            </div>
                            <div className="mt-1">
                                Logout
                            </div>
                        </div>
                    </Link>

                    <Link to={`/cashbox/account_loeschung/`}>
                        <div
                            className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <MdDelete size={25} />
                            </div>
                            <div className="mt-1">
                                Account löschen
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>

    );
}

export default Mainmenu;