import axios from "axios";

export const startPayment = async (verbindungstyp) => {

    try {
        const response = await axios.patch(`http://${verbindungstyp}:4000/api/cash/payment/`,
            {neuerBetrag: sessionStorage.getItem("einzahlenderBetrag")},
            {headers: {'Content-Type': 'application/json'},}
        );
        sessionStorage.setItem("Server_Response_Payment",response.data.msg);
        return response.status;
    }catch (error) {
        return 500;
    }

}