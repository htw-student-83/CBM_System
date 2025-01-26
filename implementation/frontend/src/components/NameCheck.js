/**
 * Checks has a string a capital letter
 * @param name users' input
 * @returns {boolean} true if the input starts with a capital letter otherwise false
 */
const checkCapitalLetter = (name) => {
    return name[0] === name[0].toUpperCase();
}

/**
 * Checks the validation of user'input name
 */
const checkNameValues = (name) => {
    return /^[a-zA-Z]+$/.test(name);
}

module.exports = {
    checkCapitalLetter,
    checkNameValues,
}