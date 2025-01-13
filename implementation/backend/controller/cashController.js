import { Cash } from "../modell/cashModell.js";
import { Decimal } from "decimal.js";

/**
 * Get all users from the db
 * @param req not used
 * @param res the stored users in form of json
 * @returns {Promise<void>}
 */
const getCurrentStand = async (req, res) => {
    const cash = await Cash.findOne({});
    const transformedResult = cash.kassenstand.toString();
    res.status(200).json(transformedResult);
}


/**
 * Change the current stand of cash
 * @param req new cash
 * @param res
 * @returns {Promise<*>}
 */
const payment = async (req, res)=> {
    const cash = await Cash.findOne({});
    const gewandelterEinzuzahlenderBetrag = Number.parseFloat(cash.kassenstand);
    const { neuerBetrag } = req.body;
    let sum = new Decimal(neuerBetrag.replace(",", ".")).plus(gewandelterEinzuzahlenderBetrag);

    if (typeof neuerBetrag !== 'string') {
        return res.status(400).json({ msg: "Deine Eingabe ist gültig." });
    }

    const cashStandUpdated = await Cash.findOneAndUpdate(
        {}, // Suche die erste passende Kasse
        { kassenstand: sum.toFixed(2) },
        { new: true, runValidators: true } // Rückgabe der aktualisierten Daten, Validierung aktivieren
    );

    if(!cashStandUpdated){
        return res.status(500).json({msg: "Server error."});
    }
    res.status(200).json({ msg: "Du kannst nun den Betrag in die Kasse legen."});
}


/**
 * makes the differenz between the current stand and an amount
 * @param req new cash
 * @param res
 * @returns {Promise<*>}
 */
const payout = async (req, res)=> {

    //Value from the db
    const cash = await Cash.findOne({});
    const savedValue = new Decimal(cash.kassenstand.toString());

    //input
    const { neuerAuszahlungsbetrag } = req.body;
    const pruefBetrag = new Decimal(neuerAuszahlungsbetrag.replace(",", "."));

    //Operation minus
    const differenz = savedValue.minus(new Decimal(neuerAuszahlungsbetrag.replace(",", ".")));


    if(savedValue.isZero()){
        return res.status(200).json({msg: "Die Kasse ist leer."});
    }

    //Sicherheitsprüfung
    if(pruefBetrag.greaterThan(savedValue)){
        return res.status(200).json({msg: "Dieser Betrag ist nicht in der Kasse vorhanden."});
    }

    const cashStandUpdated = await Cash.findOneAndUpdate(
        {}, // Suche die erste passende Kasse
        { kassenstand: differenz.toFixed(2)},
        { new: true, runValidators: true } // Rückgabe der aktualisierten Daten, Validierung aktivieren
    );

    if(!cashStandUpdated){
        return res.status(500).json({msg: "Server error."});
    }

    res.status(200).json({ msg: "Du kannst nun den gewünschten Betrag aus der Kasse nehmen."});
}

export default {
    getCurrentStand,
    payment,
    payout
}
