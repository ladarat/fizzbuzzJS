const FIZZ = "Fizz"
function show(number){
    if(number %3 == 0){
        return FIZZ
    }

    if(number %5 == 0){
        return "Buzz"
    }

    return number.toString()
}

module.exports = { 
    show : show, 
    FIZZ : FIZZ
}