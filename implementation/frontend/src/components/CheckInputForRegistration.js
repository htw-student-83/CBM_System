/**
 * checks the length and the upper case of user's input
 * @param str input
 * @returns {boolean} true, if the length is min four and the string starts with an upper case otherwise false
 */
function startsWithUpperCaseAndMinLength(str) {
    return /^[A-Z].{3,}$/.test(str); // Mindestens 4 Zeichen, wobei das erste ein Großbuchstabe ist
}

module.exports = {
    startsWithUpperCaseAndMinLength
}