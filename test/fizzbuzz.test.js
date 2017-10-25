const fizzBuzz = require('../src/fizzBuzz')

test('given 1 it should be return 1', () => {
    expect(fizzBuzz.show(1)).toBe("1")
})

const dataDrivenFizz = [3, 6, 9, 51]
dataDrivenFizz.forEach(testCaseFizz => {
    test('given '+ testCaseFizz.toString() +' it should be return Fizz', () => {
        expect(fizzBuzz.show(testCaseFizz)).toBe(fizzBuzz.FIZZ);
    })
});

const dataDrivenBuzz = [5, 25, 55]
dataDrivenBuzz.forEach(dataBuzz => {
    test('given ' + dataBuzz.toString() + ' it should be return Buzz', () => {
        expect(fizzBuzz.show(dataBuzz)).toBe(fizzBuzz.BUZZ);
    })
})