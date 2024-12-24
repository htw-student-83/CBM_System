//check the prefix of a mobile number
const prefixcheck = (mobile) => {
    var firstNumbers = mobile.toString().substring(0, 4);
    const MOBILENETWORK = ["0151","0152", "0153", "0162", "0163", "0171", "0172",
        "0173", "0174", "0175", "0176", "0177", "0178", "0179"];
    let patternIsValid = false;
    for(var i = 0; i < MOBILENETWORK.length; i++){
        if(firstNumbers === MOBILENETWORK[i]){
            patternIsValid = true;
        }
    }
    return patternIsValid;
}

/*
    true if the input only an umber and has it a point
 */
const validationOfNumber = (mobile) => {
    return isNaN(mobile);
}

const position_after_point = (amount) => {
    var last_part_of_amount = (amount % 1).toFixed(2).split('.')[1];
    var number = length_of_first_numbers + last_part_of_amount;
    //Prüfe die Anzahl der Zahlen vor dem Komma
    var length_of_first_numbers = Math.abs(Math.trunc(amount)).toString();
    if(length_of_first_numbers.length === 3){
        last_part_of_amount = (amount % 1).toFixed(2).split('.')[1];
        number = length_of_first_numbers +"."+ last_part_of_amount;
        console.log(number);
    }else {
        last_part_of_amount = (amount % 1).toFixed(2).split('.')[1];
        number = length_of_first_numbers +"."+ last_part_of_amount;
        console.log(number);
    }
    if(amount.toString().length === 4){
        console.log("4 Zahlen")
    }else if (amount.toString().length === 5){
        console.log("5 Zahlen")
    }
    return (amount % 1).toFixed(2).split('.')[1];
}

module.exports = {
    prefixcheck,
    validationOfNumber,
    position_after_point,
};
