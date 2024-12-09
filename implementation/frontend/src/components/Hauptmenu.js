import { Link } from "react-router-dom"
import { PiHandDeposit } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { IoLogOutOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import ViewLogged from "./ViewLogged.js";
import {FaCashRegister} from "react-icons/fa";

function Mainmenu({id}) {
    return (
        <div className="bg-blue-400 h-screen overflow-hidden" id="mainscreen">

            {/* Wasserzeichen im Hintergrund */}
            <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none z-0">
                <FaCashRegister size={500} className="text-gray-100" />
            </div>

            <div>
                <ViewLogged/>
            </div>

            <div className="flex flex-grow justify-center bg-blue-400">
                <div className="flex flex-col mt-48 ml-0 bg-blue-400">
                    <Link to='/cashbox/einzahlung'>
                        <div
                            className="flex flex-grow text-xl mb-7 p-3 w-full justify-center rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <PiHandDeposit width={500} height={100}/>
                            </div>
                            <div>
                                Einzahlung
                            </div>
                        </div>
                    </Link>

                    <Link to={'/cashbox/auszahlung'}>
                        <div
                            className="flex flex-grow text-xl justify-center mb-7 p-3 w-96  rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <GiReceiveMoney width={500} height={100}/>
                            </div>
                            <div>
                                Auszahlung
                            </div>
                        </div>
                    </Link>

                    <Link to='/cashbox/userdataview'>
                        <div
                            className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <MdChangeCircle width={500} height={100}/>
                            </div>
                            <div>
                                Meine Daten ändern
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col  pl-5 mt-48 bg-blue-400 h-dvh" id="mainscreen">
                    <Link to='/cashbox/userdataview'>
                        <div className="flex flex-grow justify-center text-xl mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <ImProfile width={500} height={100}/>
                            </div>
                            <div>
                                Meine Daten
                            </div>
                        </div>
                    </Link>

                    <Link to={`/cashbox/logout/${id}`}>
                        <div
                            className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <IoLogOutOutline width={500} height={100}/>
                            </div>
                            <div>
                                Logout
                            </div>
                        </div>
                    </Link>

                    <Link to={`/cashbox/account_loeschung/`}>
                        <div
                            className="flex flex-grow text-xl justify-center mb-7 p-3 w-96 rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                            <div className="py-1 px-3">
                                <MdDelete width={500} height={100}/>
                            </div>
                            <div>
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