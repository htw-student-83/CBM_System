import axios from "axios";
import memoryStorage from './memoryStorage'

/**
 * handle the payment process
 * @param verbindungstyp local or ip
 * @returns {Promise<number|*>} answer from server as a string
 */
export const startDataChanging = async (verbindungstyp) => {
    const newData = memoryStorage.get('user');
    try {
        const response = await axios.patch(`http://${verbindungstyp}:4000/api/user/change/profil`,newData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        memoryStorage.remove('user');
        return response.data.msg;
    }catch (error) {
        return error.message;
    }
}