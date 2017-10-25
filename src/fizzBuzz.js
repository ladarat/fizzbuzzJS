const FIZZ = "Fizz"
const BUZZ = "Buzz"

function show(number){
    if(number %3 == 0){
        return FIZZ
    }

    if(number %5 == 0){
        return BUZZ
    }

    return number.toString()
}

module.exports = { 
    show : show, 
    FIZZ : FIZZ,
    BUZZ : BUZZ
}