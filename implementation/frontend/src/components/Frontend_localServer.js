import axios from "axios";

export const connectToLocalhost = async (serveradress, navigate) => {
    try {
        await axios.get(`http://${serveradress}:4000/api/server/localserver`)
            .then((response) => {
                if(response.status === 200){
                    navigate('/cashbox/login',{ state: { message: serveradress }});
                }
            })
            .catch((error) => {
                navigate('/cashbox/serverFail',{ state: { message: serveradress }});
            });
    } catch (error) {
        console.error(error);
    }
}