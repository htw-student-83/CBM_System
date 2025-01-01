/**
 * Check the length of the entered password
 * @param userInput
 * @returns true if the lenght of the key is enough otherwise false
 */
const validationOfLength = (userInput) => {
    return userInput.toString().length < 10 || userInput.toString().length > 10
}

/**
 * checks contains the input only numbers for the login
 * @param userinput
 * @returns {boolean} true if the input has only numbers otherwise false
 */
const validationOfNumber = (userinput) => {
    return /^[0-9]+$/.test(userinput);
}

module.exports = {
    validationOfNumber,
    validationOfLength,
};
