const checkCapitalLetter = (name) => {
    return name[0] === name[0].toUpperCase();
}

//Check the name of letters
const checkNameValues = (name) => {
    return /^[a-zA-Z]+$/.test(name);
}

module.exports = {
    checkCapitalLetter,
    checkNameValues,
}