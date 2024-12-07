import { Link } from "react-router-dom"

function Mainmenu({id}) {
    return (
        <div className="flex flex-col justify-center bg-blue-400 h-dvh" id="mainscreen">
            <Link to='/cashbox/einzahlung'>
                <div
                    className="text-xl mb-5 p-3 w-96 text-center rounded-3xl bg-blue-100 mx-auto cursor-pointer hover:bg-yellow-300 ">
                    Einzahlung
                </div>
            </Link>
            <Link to='/cashbox/auszahlung'>
                <div
                    className="text-xl mb-5 p-3 w-96 text-center rounded-3xl bg-blue-100 mx-auto cursor-pointer hover:bg-yellow-300">
                    Auszahlung
                </div>
            </Link>
            <div
                className="text-xl mb-5 p-3 w-96 text-center rounded-3xl bg-blue-100 mx-auto cursor-pointer hover:bg-yellow-300 ">
                Daten ändern
            </div>
            <Link to='/cashbox/userdataview'>
                <div
                    className="text-xl mb-5 p-3 w-96 text-center rounded-3xl bg-blue-100 mx-auto cursor-pointer hover:bg-yellow-300">
                    Meine Daten
                </div>
            </Link>
            <Link to={`/cashbox/logout/${id}`}>
                <div
                    className="text-xl mb-5 p-3 w-96 text-center rounded-3xl bg-blue-100 mx-auto cursor-pointer hover:bg-yellow-300">
                    Logout
                </div>
            </Link>
            <Link to='/cashbox/account_loeschung'>
                <div
                    className="text-xl p-3 w-96 text-center rounded-3xl bg-blue-100 mx-auto cursor-pointer hover:bg-yellow-300">
                    Account löschen
                </div>
            </Link>
        </div>
    );
}

export default Mainmenu;