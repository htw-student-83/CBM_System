import { Link } from "react-router-dom"

function MainFinal() {
    return (
        <div className="flex flex-col justify-center bg-blue-400 h-dvh" id="mainscreen">
            <Link to='/cashbox/einzahlung'>
                <div
                    className="text-2xl mb-5 p-3 w-96 text-center rounded-3xl bg-blue-100 mx-auto cursor-pointer hover:bg-yellow-300 ">
                    Einzahlung
                </div>
            </Link>
            <div
                className="text-2xl mb-5 p-3 w-96 text-center rounded-3xl bg-blue-100 mx-auto cursor-pointer hover:bg-yellow-300">
                Auszahlung
            </div>
            <div className="text-2xl mb-5 p-3 w-96 text-center rounded-3xl bg-blue-100 mx-auto cursor-pointer hover:bg-yellow-300 ">
                Daten ändern
            </div>
            <div className="text-2xl mb-5 p-3 w-96 text-center rounded-3xl bg-blue-100 mx-auto cursor-pointer hover:bg-yellow-300">
                Meine Daten
            </div>
            <div className="text-2xl p-3 w-96 text-center rounded-3xl bg-blue-100 mx-auto cursor-pointer hover:bg-yellow-300">
                Account löschen
            </div>
        </div>
    );
}

export default MainFinal;