import { Cash } from "../modell/cashModell.js";

/**
 * Get all users from the db
 * @param req not used
 * @param res the stored users in form of json
 * @returns {Promise<void>}
 */
const getCurrentStand = async (req, res) => {
    const cash = await Cash.findOne({});
    res.status(200).json(cash);
}

export default {
    getCurrentStand,
}
