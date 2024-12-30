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
const payment = async (req, res)=> {
    const { neuerBetrag } = req.body;
    const gewandelterEinzuzahlenderBetrag = Number.parseFloat(neuerBetrag)
    const cash = await Cash.findOne({});
    const savedValue = Number.parseFloat(cash.kassenstand)
    const calculateNewCashStand = savedValue + gewandelterEinzuzahlenderBetrag;

    if (typeof neuerBetrag !== 'string') {
        return res.status(400).json({ msg: "Deine Eingabe ist gültig." });
    }

    const cashStandUpdated = await Cash.findOneAndUpdate(
        {}, // Suche die erste passende Kasse
        { kassenstand: calculateNewCashStand },
        { new: true, runValidators: true } // Rückgabe der aktualisierten Daten, Validierung aktivieren
    );

    if(!cashStandUpdated){
        return res.status(500).json({msg: "Server error."});
    }
    res.status(200).json({ msg: "Die Einzahlung war erfolgreich."});
}


/**
 * makes the differenz between the current stand and an amount
 * @param req new cash
 * @param res
 * @returns {Promise<*>}
 */
const payout = async (req, res)=> {

    const { neuerAuszahlungsbetrag } = req.body;

    //change the type of variable, which was revieved
    const gewandelterAuszahlungsbetrag = Number.parseInt(neuerAuszahlungsbetrag);

    //change the type of variable, which was loade from the db
    const cash = await Cash.findOne({});
    const savedValue = Number.parseFloat(cash.kassenstand);

    if(gewandelterAuszahlungsbetrag > savedValue){
        return res.status(200).json({msg: "Dieser Betrag ist nicht in der Kasse vorhanden."});
    }

    if(savedValue === 0 || savedValue < 0){
        return res.status(200).json({msg: "Die Kasse ist leer."});
    }

    const calculateNewCashStand = savedValue - gewandelterAuszahlungsbetrag;

    if(calculateNewCashStand === 0 || calculateNewCashStand < 0){
        return res.status(200).json({msg: "Achtung: Für die nächste Auszahlung ist nicht mehr genug Geld in der Kasse."});
    }

    const cashStandUpdated = await Cash.findOneAndUpdate(
        {}, // Suche die erste passende Kasse
        { kassenstand: calculateNewCashStand },
        { new: true, runValidators: true } // Rückgabe der aktualisierten Daten, Validierung aktivieren
    );

    if(!cashStandUpdated){
        return res.status(500).json({msg: "Server error."});
    }

    res.status(200).json({ msg: "Die Auszahlung war erfolgreich."});
}

export default {
    getCurrentStand,
    payment,
    payout
}
