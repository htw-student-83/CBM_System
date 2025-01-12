import axios from "axios";

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