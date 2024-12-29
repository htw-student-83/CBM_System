import axios from "axios";

export const connectToTCPServer = async (ipServer, navigate) => {

    try {
        await axios.get(`http://${ipServer}:4000/api/server/tcpserver`)
            .then((response) => {
                if(response.status === 200){
                    navigate('/cashbox/login',{ state: { message: ipServer }});
                }
            }).catch((err) => {
                setTimeout(() => {
                    navigate('/cashbox/serverFail',{ state: { message: ipServer }});}, 3000)
            })
    }catch (error) {
        console.error("Error connecting to server:", error);

        setTimeout(() => {
            navigate('/cashbox/serverFail');
        }, 3000);
    }

}