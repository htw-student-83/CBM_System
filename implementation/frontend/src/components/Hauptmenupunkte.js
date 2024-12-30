import React, {useEffect, useState} from 'react';
import LinkeMenuhaelfte from "./LinkeMenuhaelfte";
import RechteMenuhaelfte from "./RechteMenuhaelfte";
import {useLocation} from "react-router-dom";

const Hauptmenupunkte = () => {


    return (
        <div className="flex flex-row gap-5 z-10">
            <LinkeMenuhaelfte/>
            <RechteMenuhaelfte/>
        </div>
    )
}

export default Hauptmenupunkte;
