import MainIcon from "./MainIcon";
import TopicPasswortVergessen from "./TopicPasswortVergessen";
import InputfeldPasswortVergessen from "./InputfeldPasswortVergessen";
import React from "react";

/**
 * The component about password forgotten
 * @returns {JSX.Element}
 * @constructor
 */
export default function PasswortVergessen(){

    return(
        <div className="bg-sky-300 pt-32 h-dvh">
            <div className="flex flex-col justify-center bg-white w-fit p-10 mt-10 ml-auto mr-auto rounded-3xl">
                <MainIcon/>
                <TopicPasswortVergessen/>
                <InputfeldPasswortVergessen/>
            </div>
        </div>
    )

}