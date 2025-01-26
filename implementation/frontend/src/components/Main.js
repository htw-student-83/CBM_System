import HauptIcon from "./HauptIcon";

/**
 * The first page, which will print if the system was started successfully
 * @returns {JSX.Element}
 * @constructor
 */
export default function Main(){

    return(
        <div className="flex flex-col justify-center bg-sky-300 h-dvh" id="mainscreen">
            <div className="ml-auto mr-auto hover: cursor-pointer">
                <HauptIcon/>
            </div>
            <div>
                <h1 className="text-4xl mt-5 font-mono text-center">Cash-Box</h1>
            </div>
        </div>
    )

}