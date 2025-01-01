function startsWithUpperCaseAndMinLength(str) {
    return /^[A-Z].{3,}$/.test(str); // Mindestens 4 Zeichen, wobei das erste ein Großbuchstabe ist
}

module.exports = {
    startsWithUpperCaseAndMinLength
}