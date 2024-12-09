import { Link } from "react-router-dom"
import { PiHandDeposit } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { IoLogOutOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

function Mainmenu({id}) {
    return (
        <div className="flex flex-grow  justify-center ml-auto mr-auto bg-blue-400 h-dvh" id="mainscreen">
            <div className="flex flex-col px-5 justify-center bg-blue-400 h-dvh">
                <Link to='/cashbox/einzahlung'>
                    <div className="flex flex-grow text-xl mb-5 p-3 w-full justify-center rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                        <div className="py-1 px-3">
                            <PiHandDeposit width={500} height={100}/>
                        </div>
                        <div>
                            Einzahlung
                        </div>
                    </div>
                </Link>

                <Link to={'/cashbox/auszahlung'}>
                    <div className="flex flex-grow text-xl mb-5 p-3 w-96 justify-center rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                        <div className="py-1 px-3">
                            <GiReceiveMoney width={500} height={100}/>
                        </div>
                        <div>
                            Auszahlung
                        </div>
                    </div>
                </Link>

                <Link to='/cashbox/userdataview'>
                    <div className="flex flex-grow text-xl mb-5 p-3 w-96 justify-center rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                        <div className="py-1 px-3">
                            <MdChangeCircle width={500} height={100}/>
                        </div>
                        <div>
                            Meine Daten ändern
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col justify-center bg-blue-400 h-dvh" id="mainscreen">
                <Link to='/cashbox/userdataview'>
                    <div className="flex flex-grow text-xl mb-5 p-3 w-96 justify-center rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                        <div className="py-1 px-3">
                            <ImProfile width={500} height={100}/>
                        </div>
                        <div>
                            Meine Daten
                        </div>
                    </div>
                </Link>

                <Link to={`/cashbox/logout/${id}`}>
                    <div className="flex flex-grow text-xl mb-5 p-3 w-96 justify-center rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
                        <div className="py-1 px-3">
                            <IoLogOutOutline width={500} height={100}/>
                        </div>
                        <div>
                            Logout
                        </div>
                    </div>
                </Link>

                <Link to={`/cashbox/account_loeschung/`}>
                    <div className="flex flex-grow text-xl mb-5 p-3 w-96 justify-center rounded-3xl bg-blue-100 cursor-pointer hover:bg-yellow-300 ">
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
    );
}

export default Mainmenu;