import axios from "axios";
export const startPayout = async (verbindungstyp) => {

    try {
        const response = await axios.patch(`http://${verbindungstyp}:4000/api/cash/payout/`,
            {neuerAuszahlungsbetrag: sessionStorage.getItem("einzahlenderBetrag")},
            {headers: {'Content-Type': 'application/json'},}
        );
        sessionStorage.setItem("Server_Response_Payout",response.data.msg);
        return response.status;
    }catch (error) {
        return 500;
    }

}