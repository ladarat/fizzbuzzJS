const fizzBuzz = require('../src/fizzBuzz')

test('given 1 it should be return 1', () => {
    expect(fizzBuzz.show(1)).toBe("1")
})

var dataDrivenFizz = [ 3, 6, 9, 51 ]

dataDrivenFizz.forEach(testCaseFizz => {
    test('given '+ testCaseFizz.toString() +' it should be return Fizz', () => {
        expect(fizzBuzz.show(testCaseFizz)).toBe(fizzBuzz.FIZZ);
    })
});

test('given 5 it should be return Buzz', () => {
    expect(fizzBuzz.show(5)).toBe(fizzBuzz.BUZZ);
})
test('given 25 it should be return Buzz', () => {
    expect(fizzBuzz.show(25)).toBe(fizzBuzz.BUZZ);
})
