const FIZZ = "Fizz"
const BUZZ = "Buzz"

function show(number){
    if(isFizz(number)){
        return FIZZ
    }

    if(number %5 == 0){
        return BUZZ
    }

    return number.toString()
}

function isFizz(number){
    return number %3 == 0
}

module.exports = { 
    show : show, 
    FIZZ : FIZZ,
    BUZZ : BUZZ
}