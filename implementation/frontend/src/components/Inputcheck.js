/**
 * checks the users' input for a successful process (payment or payout)
 * @param str the user's input
 * @returns {boolean} if the input is valid otherwise false
 */
function inputcheck (str){
    const trimmedStr = str.trim(); // Leerzeichen entfernen
    // Prüft, ob die Eingabe nur aus Zahlen besteht, gefolgt von einem Punkt oder Komma und genau zwei Dezimalstellen
    const regex = /^\d+([,]\d{2})$/;
    return regex.test(trimmedStr);
}

module.exports = {
    inputcheck
}

