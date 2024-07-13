import { FaCashRegister } from "react-icons/fa6";
import { Link } from "react-router-dom"

export default function Main(){

    return(
        <div className="flex flex-col justify-center bg-sky-300 h-dvh" id="mainscreen">
            <div className="ml-auto mr-auto hover: cursor-pointer">
                <Link to='/cashbox/serverArt'>
                    <FaCashRegister icon="fa-thin fa-cash-register" size={150}/>
                </Link>
            </div>
            <div>
                <h1 className="text-4xl mt-5 font-mono text-center">Cash-Box</h1>
            </div>
        </div>
    )

}