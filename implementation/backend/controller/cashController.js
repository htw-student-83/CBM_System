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

/**
 * Change the current stand of cash
 * @param req new cash
 * @returns {Promise<*>}
 */
const updateCurrentCash = async (req, res)=> {
    const { neuerBetrag } = req.body;
    const gewandelterEinzuzahlenderBetrag = Number.parseFloat(neuerBetrag)
    const cash = await Cash.findOne({});
    const savedValue = Number.parseFloat(cash.kassenstand)
    const calculateNewCashStand = savedValue + gewandelterEinzuzahlenderBetrag;

    if(!neuerBetrag){
        return res.status(404).json({msg: "No cash entry for updating."});
    }

    if (typeof neuerBetrag !== 'string') {
        return res.status(400).json({ msg: "Invalid input: 'cash' must be a string." });
    }

    const cashStandUpdated = await Cash.findOneAndUpdate(
        {}, // Suche die erste passende Kasse
        { kassenstand: calculateNewCashStand },
        { new: true, runValidators: true } // Rückgabe der aktualisierten Daten, Validierung aktivieren
    );

    if(!cashStandUpdated){
        return res.status(500).json({msg: "Server error."});
    }
    res.status(200).json({ msg: "Cash updated successfully."});
}

export default {
    getCurrentStand,
    updateCurrentCash,
}
