import { MdOutlineConstruction } from "react-icons/md";
import { Link } from "react-router-dom"
//Link to='/cashbox/serverArt'
function Main(){

    return(
        <div className="flex flex-col justify-center bg-blue-400 h-dvh" id="mainscreen">
            <div className="ml-auto mr-auto hover: cursor-pointer">

                <Link to='/'>
                    <MdOutlineConstruction icon="fa-thin fa-cash-register" size={150}/>
                </Link>
            </div>
            <div>
                <h1 className="text-3xl mt-5 font-mono text-center">This site will visible very soon!</h1>
            </div>
        </div>
    )

}

export default Main;