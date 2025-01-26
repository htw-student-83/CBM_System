import axios from "axios";

/**
 * handle the payment process
 * @param verbindungstyp local or ip
 * @returns {Promise<number|*>} answer from server as a string
 */
export const startPayment = async (verbindungstyp) => {

    try {
        const response = await axios.patch(`http://${verbindungstyp}:4000/api/cash/payment/`,
            {neuerBetrag: sessionStorage.getItem("einzahlenderBetrag")},
            {headers: {'Content-Type': 'application/json'},}
        );
        return response.data.msg;
    }catch (error) {
        return 500;
    }

}