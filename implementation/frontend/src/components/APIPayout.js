import axios from "axios";


/**
 * handle the payout process
 * @param verbindungstyp local or ip
 * @returns {Promise<number|*>} answer from server as a string
 */
export const startPayout = async (verbindungstyp) => {

    try {
        const response = await axios.patch(`http://${verbindungstyp}:4000/api/cash/payout/`,
            {neuerAuszahlungsbetrag:sessionStorage.getItem("auszahlenderBetrag")},
            {headers: {'Content-Type': 'application/json'},}
        );
        return response.data.msg;
    }catch (error) {
        return 500;
    }

}