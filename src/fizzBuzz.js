function show(number){
    if(number %3 == 0){
        return "Fizz"
    }
    return number.toString()
}

module.exports = show