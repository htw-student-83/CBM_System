import { FaCashRegister } from "react-icons/fa";

const ForegroundWatermark = () => {
    return (
        <div className="relative bg-blue-400 h-screen">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-5">
                <FaCashRegister size={500} className="text-gray-100" />
            </div>
        </div>
    );
};

export default ForegroundWatermark;

