import axios from "axios";
export const startPayout = async (verbindungstyp, betrag) => {

    try {
        const response = await axios.patch(`http://${verbindungstyp}:4000/api/cash/payout/`,
            {neuerAuszahlungsbetrag: betrag},
            {headers: {'Content-Type': 'application/json'},}
        );
        return response.data.msg;
    }catch (error) {
        return 500;
    }

}