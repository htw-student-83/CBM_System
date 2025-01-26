import axios from "axios";


/**
 * Function to handle the local server connection
 * @param serveradress localadress
 * @returns {Promise<number>} 200 if the connection is successfully otherwise nothing
 */
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