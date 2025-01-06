import axios from "axios";

export const connectToLocalhost = async (serveradress) => {
    try {
        const responseFromLocalServer =  await axios.get(`http://${serveradress}:4000/api/server/localserver`);
        if(responseFromLocalServer.status === 200){
            return 200;
        }
    } catch (error) {
        return 500;
    }
}