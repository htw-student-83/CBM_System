import axios from "axios";

export const connectToRemoteServer = async (ipServer, navigate) => {

    try {
        const remoteServerResponse = await axios.get(`http://${ipServer}:4000/api/server/tcpserver`);
        if(remoteServerResponse.status === 200){
            return 200;
            // navigate('/cashbox/login',{ state: { message: ipServer }});
        }
    }catch (error) {
        return 500;
    }

}