import axios from "axios";

/**
 * function to handle the remote server connection
 * @param ipServer ip-address
 * @returns {Promise<number>} 200 if the connection is successfully otherwise nothing
 */
export const connectToRemoteServer = async (ipServer) => {

    try {
        const remoteServerResponse = await axios.get(`http://${ipServer}:4000/api/server/tcpserver`);
        if(remoteServerResponse.status === 200){
            return 200;
        }
    }catch (error) {
        return 500;
    }

}