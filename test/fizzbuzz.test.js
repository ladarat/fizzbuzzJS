const show = require('../src/fizzBuzz')

test('given 1 it should be return 1', () => {
    expect(show(1)).toBe("1")
})

test('given 3 it should be return Fizz', () => {
    expect(show(3)).toBe("Fizz");
})

test('given 6 it should be return Fizz', () => {
    expect(show(6)).toBe("Fizz");
})

test('given 9 it should be return Fizz', () => {
    expect(show(9)).toBe("Fizz");
})

test('given 51 it should be return Fizz', () => {
    expect(show(51)).toBe("Fizz");
})

test('given 5 it should be return Buzz', () => {
    expect(show(5)).toBe("Buzz");
})

test('given 25 it should be return Buzz', () => {
    expect(show(25)).toBe("Buzz");
})
