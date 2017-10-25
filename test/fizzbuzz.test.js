const show = require('../src/fizzBuzz')

test('given 1 it should be return 1', () => {
    expect(show(1)).toBe("1")
})

test('given 3 it should be return Fizz', () => {
    expect(show(3)).toBe("Fizz");
})